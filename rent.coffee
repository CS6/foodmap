
Vue.component "done-component",
    template: '
        <div class="done_container">
            <h1>租借完成</h1>
            <p>您的訂單號碼為：<strong style="color: #f00;">{{ todayDate }}-{{ rentalId }}</strong></p>
            <p>本次租用開始時間為：<strong style="color: #00f;">{{ rentalStart }}</strong></p>
            <a href="index.html" class="btn color-success size-lg">回到主畫面</a>
        </div>
    '

    data: ->
        todayDate: ""
        rentalId: ""
        rentalStart: ""

    mounted: ->
        @rentalId = app.Rental.rentalId.toString(16)
        @todayDate = parseInt(moment().format("YYYYMMDD") ,10).toString(16)
        @rentalStart = moment(app.Rental.start).format("YYYY-MM-DD HH:mm")

Vue.component "await-component",
    template: '
        <div class="await_container">
            <h1>請從下方 <strong>{{ slot }}</strong> 號槽內取出電源.......</h1>
            <p>系統偵測到取出後會自動鎖上</p>
                <p style="color: #f00">1. 請不要離開，請等到出現訂單成功畫面。<br>2. 取出電源後請先檢視是否有任何問題。</p>
        </div>
    '

    data: ->
        slot: 0

    mounted: ->
        @slot = app.selectedPos

        self = @

        $.ajax
            url: "http://192.168.2.1:3000/rentals"
            type: "POST"
            contentType: "application/json; charset=utf-8"
            dataType: "json"
            async: true
            timeout: 30 * 1000

            headers:
                UserToken: app.UserToken

            data: JSON.stringify
                boxId: app.selectedBoxId
                slot: app.selectedPos

            success: (msg)  ->
                console.log msg
                app.Rental = msg.result.RentalInfo
                app.currentView = "done-component"

        return false

Vue.component "select-component",
    template: '
    <div>
        <div class="slot_container">
            <div class="slot" v-for="(slot, index) in slots" @click="selectSlot(slot, index)">
                <input type="radio" name="slot" :value="slot.boxId + \',\' +slot.slot" :disabled="slot.battery == null" v-model="selectedSlot">
                #{{ index+1 }}: <span v-if="slot.battery == null">無電池</span><span v-else>充電中</span>
            </div>
        </div>
        <br>
        <div class="clearfix"></div>
        <div class="clearfix" style="text-align: right; margin-right: 3rem;">
            <button class="btn size-lg color-success" @click="confirmSelect">確認選擇槽位&nbsp;&rarr;</button>
        </div>
    </div>
    '
    data: ->
        slots: []
        selectedSlot: ""

    methods:
        selectSlot: (slot, index) ->
            @selectedSlot = slot.boxId + "," + slot.slot

        confirmSelect: ->
            [ app.selectedBoxId, app.selectedPos ] = @selectedSlot.split ","
            app.currentView = "await-component"

    mounted: ->
        self = @

        $.getJSON("http://192.168.2.1:3000/server/slots").done (data) ->
            data.result.SlotStatusList.map (s) -> self.slots.push s

# modal component
Vue.component "login-component",
    data: ->
        mobile: ""
        password: ""

    template: '
        <div style="margin: 0 auto; width: 30rem;">
            <p>請使用你在 Mia Power Station 留下的資料登入</p>
                <label for="">行動電話</label>
                <input type="text" class="ctrl-input" v-model="mobile">
                <label for="">個人密碼</label>
                <input type="password" class="ctrl-input" v-model="password">
                <button class="btn size-lg color-primary" @click="checkLogin">登入租借</button>
        </div>
    '

    methods:
        checkLogin: ->
            self = @

            $.ajax
                url: "http://192.168.2.1:3000/user/session"
                type: "POST"
                contentType: "application/json; charset=utf-8"
                dataType: "json"
                async: true
                data: JSON.stringify
                    method: "pin"
                    mobile: self.mobile
                    pinCode: self.password

                success: (msg)  ->
                    if msg.UserSession?.token?
                        app.UserToken = msg.UserSession.token
                        app.currentView = "select-component"

            return false


# main vue
app = new Vue
    el: "#app"
    data:
        # view related
        currentView: "login-component"
        currentViewTransaction: "fade"
        # modal related
        showModalMessage: false
        modalAllowClose: false
        modalMessage: ""
        modalTitle: ""
        userToken: ""
        selectedBoxId: ""
        selectedPos: 0
        Rental: {}

    methods:
        clearModal: ->
            @showModalMessage = false
            @modalAllowClose = false
            @modalMessage = ""
            @modalTitle = ""
