
Vue.component "done-component",
    template: '
        <div class="done_container" style="width: 50rem;">

            <h1>本次訂單 <strong style="color: #f00;">29AD9-C9</strong> 已成功歸還</h1>
            <hr>
            <h2>租用資訊</h2>
            <p>本次租用開始時間為：<strong style="color: #f00;">2017-07-03 15:30</strong></p>
            <p>本次租用放回時間為：<strong style="color: #f00;">2017-07-03 16:40</strong></p>
            <br>
            <p>總租用時間：<strong>1小時10分</strong> <small>(3 個計費時段)</small></p>
            <p>租金：3 時段 x 10/時段 = <strong>NTD 60</strong></p>
            <p>折扣：試營運免費 - NTD 30</p>
            <p>應付金額： NTD 0</p>
            <hr>
            <p>發票號碼：<span style="color: #f00;">(本次為零元帳單，無發票產生)</span></p>
            <p>(若有非零元金額，我們將會開立電子發票並寄至您的電子郵件信箱)</p>
            <p><small>您也可以在機台的「會員專區」裡查詢本次交易的相關細節，若有問題歡迎您和我們的客服詢問。</small></p>
            <br>

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

Vue.component "fee-component",
    template: '
    <div class="done_container" style="width: 50rem;">
            <h1>本次訂單 <strong style="color: #f00;">29AD9-C9</strong> 明細</h1>
            <p>本次租用開始時間為：<strong style="color: #f00;">2017-07-06 15:30</strong></p>
            <p>本次租用放回時間為：<strong style="color: #f00;">2017-07-06 16:40</strong></p>
            <hr>
            <p>總租用時間：<strong>1小時10分</strong> <small>(3 個計費時段)</small></p>
            <p>租金：3 時段 x 10/時段 = <strong>NTD 30</strong></p>
            <p>折扣：試營運免費 - NTD 30</p>
            <p>應付金額： NTD 0</p>
            <hr>
            <button disabled class="btn">使用一卡通靠卡付款</button>
            <button class="btn size-lg color-success" @click="goDone">完成結帳</button>
        </div>
    '
    methods:
        goDone: -> app.currentView = 'done-component'

Vue.component "await-component",
    template: '
        <div class="await_container">
            <h1>請把電池放回下方的 <strong>{{ slot }}</strong> 號槽.......</h1>
            <p>系統偵測到放回後會自動鎖上</p>
                <p style="color: #f00">1. 請不要離開，請等到出現訂單成功畫面。<br>2. 取出電源後請先檢視是否有任何問題。</p>
        </div>
    '

    data: ->
        slot: 0

    mounted: ->
        @slot = app.selectedPos

        setTimeout ->
            app.currentView = "fee-component"
        , 5000

        return false

Vue.component "select-component",
    template: '
    <div>
        <div class="slot_container">
            <div class="slot" v-for="(slot, index) in slots" @click="selectSlot(slot, index)">
                <input type="radio" name="slot" :value="slot.boxId + \',\' +slot.slot" :disabled="slot.battery != null" v-model="selectedSlot">
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

        jQuery.getJSON("http://127.0.0.1:3000/server/slots").done (data) ->
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

            jQuery.ajax
                url: "http://127.0.0.1:3000/user/session"
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
