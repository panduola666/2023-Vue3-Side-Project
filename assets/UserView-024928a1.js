import{m as I,b as k,d as x,u as b}from"./vueLoadingStore-98d1fb2a.js";import{l as c,n as _}from"./runtime-dom.esm-bundler-21d14b8b.js";import{b6 as P,av as E,aj as d,l as p,j as V,s as u,T as C,m as t,k as B,F as S,at as U,aJ as g,b3 as h,t as v,b1 as y,an as A,ak as T}from"./_plugin-vue_export-helper-01f09012.js";const{VITE_BASEURL:f}={VITE_BASEURL:"https://2023-vue3-eastern-tea-aroma.onrender.com",BASE_URL:"/2023-Vue3-Eastern-Tea-Aroma/",MODE:"production",DEV:!1,PROD:!0},L={data(){return{isInfoEditor:!1,isPasswordEditor:!1,password:{oldPassword:"",newPassword:"",check:""},postImg:!1}},computed:{...I(b,["isLogin","user"]),userInfo(){return{name:this.user.name,tel:this.user.tel}},ordersPrice(){var e;let s=0;return(e=this.user.orders)==null||e.forEach(l=>{const{scale:n,type:a}=l.discount;l.cart.forEach(r=>{r.isDiscount?a==="money"?s+=r.totalPrice-n:s+=Math.round(r.totalPrice*n):s+=r.totalPrice})}),s}},methods:{...k(b,["overLogin","getUserData","signOut"]),changeBtnText(s){if(s.target.textContent.trim()==="編輯")return s.target.textContent="確認",s.target.classList.remove("btn-outline"),s.target.classList.add("btn-primary"),"編輯";if(s.target.textContent.trim()==="確認")return s.target.textContent="編輯",s.target.classList.remove("btn-primary"),s.target.classList.add("btn-outline"),"確認"},editor(s,e){const l=this.changeBtnText(e);if(s==="會員資訊"){if(this.isInfoEditor=l==="編輯",!this.isInfoEditor){if(!this.userInfo.name){this.userInfo.name=this.user.name;return}if(this.userInfo.name===this.user.name&&this.userInfo.tel===this.user.tel)return;const n={name:this.userInfo.name,tel:this.userInfo.tel};this.user.name=this.userInfo.name,this.$http.patch(`${f}/660/users/${sessionStorage.getItem("userId")}`,n).then(()=>{this.$swal.fire({icon:"success",title:"更改成功",showConfirmButton:!1,timer:1500})})}}else s==="修改密碼"&&(this.isPasswordEditor=l==="編輯",!this.isPasswordEditor&&this.password.check&&this.password.newPassword&&this.password.oldPassword&&this.patchPassword(),this.password=this.$options.data().password)},async patchPassword(){const s=this.password.newPassword;if(this.password.newPassword.length<6||this.password.check.length<6){this.$swal.fire({icon:"error",title:"密碼至少 6 位數",showConfirmButton:!1,timer:1500});return}if(this.password.newPassword!==this.password.check){this.$swal.fire({icon:"error",title:"兩次密碼不一致",showConfirmButton:!1,timer:1500});return}try{const e=await x.post(`${f}/login`,{email:this.user.email,password:this.password.oldPassword});e.status>=200&&e.status<300&&(await x.patch(`${f}/660/users/${sessionStorage.getItem("userId")}`,{password:s}),this.$swal.fire({icon:"success",title:"修改完成，請重新登入"}).then(()=>{this.$router.push("/login"),sessionStorage.clear()}))}catch(e){e.response.data==="Incorrect password"&&this.$swal.fire({icon:"error",title:"密碼輸入錯誤",showConfirmButton:!1,timer:1500})}},async chooseAvatar(){this.postImg=!0;const s=["男孩","女孩","隱藏"],{value:e}=await this.$swal.fire({title:"請選擇您的性別",input:"radio",inputOptions:s,showCancelButton:!0,reverseButtons:!0});if(!e){this.postImg=!1;return}const l=await this.$http.get(`${f}/avatars`),n=l.data.findIndex(r=>r.type===s[e]),a=l.data[n];if(this.user.avatarId===a.id){this.postImg=!1;return}await this.$http.patch(`${f}/users/${sessionStorage.getItem("userId")}`,{avatarId:a.id}),this.getUserData(),this.postImg=!1}}},i=s=>(A("data-v-a2b014d6"),s=s(),T(),s),D={class:"wrap"},N={class:"flex flex-col md:flex-row items-center gap-8"},O={class:"relative flex-shrink-0"},j={key:0,src:"https://raw.githubusercontent.com/panduola666/2023-Vue3-Eastern-Tea-Aroma/432edba69ae101dadc9806b476921a84c08c5b43/public/loading.svg",alt:"loadingSVG",class:"absolute top-0 right-0 left-0 bottom-0 bg-white rounded-full bg-opacity-30"},M=["src"],R=i(()=>t("p",{class:"absolute top-8 text-[2vw] hidden md:block left-1/2 -translate-x-1/2 pointer-events-none"}," 點擊選擇頭像 ",-1)),F={class:"md:w-2/3 w-full relative gap-3 flex flex-col text-center px-4 tracking-[.5rem]",id:"userChoose"},$=i(()=>t("li",null,[t("img",{src:"https://raw.githubusercontent.com/panduola666/2023-Vue3-Eastern-Tea-Aroma/432edba69ae101dadc9806b476921a84c08c5b43/public/teaIcon.svg",alt:"icon茶壺",class:"bottom-0 right-0 float-right"})],-1)),G={class:"text-xl my-10"},J=i(()=>t("h1",{class:"lg:text-3xl text-2xl text-brand-02 font-self lg:mb-6 mb-3"}," 會員資訊 ",-1)),q={class:"flex justify-between flex-col lg:flex-row lg:items-end tracking-widest"},z={class:"flex flex-col gap-3 lg:gap-6 text-gray-02"},H={class:"flex lg:flex-row flex-col lg:gap-4 gap-2 lg:items-center"},K={class:"text-gray-01"},Q={key:0,class:"text-base text-end cursor-default text-brand-01 font-medium"},W={key:1,class:"text-base text-end relative group cursor-default text-brand-01 font-medium"},X=i(()=>t("span",{class:"absolute bg-brand-01 text-white bg-opacity-75 min-w-max px-4 py-2 top-full lg:left-0 right-0 group-hover:block hidden"},"累積消費滿 20,000 將升級為茶士 (VIP)",-1)),Y={class:"flex lg:flex-row flex-col lg:gap-4 gap-2 lg:items-center"},Z=i(()=>t("label",{for:"userName"},"用戶名",-1)),tt=["disabled"],et={class:"flex lg:flex-row flex-col lg:gap-4 gap-2 lg:items-center"},st=i(()=>t("label",{for:"tel"},"手機號碼",-1)),ot=["disabled"],at={class:"text-xl my-10"},rt=i(()=>t("h1",{class:"lg:text-3xl text-2xl text-brand-02 font-self lg:mb-6 mb-3"}," 修改密碼 ",-1)),it={class:"flex justify-between flex-col lg:flex-row lg:items-end tracking-widest"},lt={class:"flex flex-col gap-3 lg:gap-6 text-gray-02"},nt={class:"flex lg:flex-row flex-col lg:gap-4 gap-2 lg:items-center"},dt=i(()=>t("label",{for:"old"},"舊密碼",-1)),ct=["disabled"],pt={class:"flex lg:flex-row flex-col lg:gap-4 gap-2 lg:items-center"},ut=i(()=>t("label",{for:"newPassword"},"新密碼",-1)),ht=["disabled"],ft={class:"flex lg:flex-row flex-col lg:gap-4 gap-2 lg:items-center"},gt=i(()=>t("label",{for:"check"},"確認密碼",-1)),mt=["disabled"];function wt(s,e,l,n,a,r){var w;const m=E("router-link");return d(),p("main",D,[(d(),V(C,{to:"title"},[u("用戶專區")])),t("div",N,[t("div",O,[a.postImg?(d(),p("img",j)):B("",!0),t("img",{src:(w=s.user.avatar)==null?void 0:w.imgUrl,alt:"用戶頭像",class:"flex-shrink-0 rounded-full object-cover border border-brand-02 bg-brand-01 bg-opacity-70 cursor-pointer hover:contrast-[0.8] lg:w-[25vw] lg:h-[25vw] w-[30vw] h-[30vw] min-h-[170px] min-w-[170px]",onClick:e[0]||(e[0]=(...o)=>r.chooseAvatar&&r.chooseAvatar(...o))},null,8,M),R]),t("ul",F,[(d(),p(S,null,U([{name:"課程預約",path:"reserve"},{name:"訂單詳情",path:"userOrders"},{name:"收藏項目",path:"collects"}],o=>t("li",{key:o.name+o.path},[v(m,{to:{name:o.path},class:"block p-4 hover:bg-brand-03 hover:bg-opacity-20 cursor-pointer text-brand-02 text-xl lg:text-3xl"},{default:y(()=>[u(g(o.name),1)]),_:2},1032,["to"])])),64)),$])]),t("div",G,[J,t("div",q,[t("div",z,[t("p",H,[u(" 帳號 "),t("span",K,g(s.user.email),1),s.user.isAdmin?(d(),p("span",Q,"茶家")):(d(),p("span",W,[u(g(r.ordersPrice>=2e4?"茶士":"茶友")+" ",1),X]))]),t("p",Y,[Z,h(t("input",{type:"text",name:"userName",id:"userName",autocomplete:"off",class:"text-gray-01 px-2 py-1","onUpdate:modelValue":e[1]||(e[1]=o=>r.userInfo.name=o),disabled:!a.isInfoEditor},null,8,tt),[[c,r.userInfo.name,void 0,{trim:!0}]])]),t("p",et,[st,h(t("input",{type:"tel",name:"tel",id:"tel",class:"text-gray-01 px-2 py-1",autocomplete:"off",oninput:"value=value.replace(/[^\\d]/g,'')","onUpdate:modelValue":e[2]||(e[2]=o=>r.userInfo.tel=o),disabled:!a.isInfoEditor},null,8,ot),[[c,r.userInfo.tel,void 0,{trim:!0}]])])]),t("button",{type:"button",class:"btn-outline h-1/2 mt-3",onClick:e[3]||(e[3]=_(o=>r.editor("會員資訊",o),["prevent"]))}," 編輯 ")])]),t("div",at,[rt,t("form",it,[t("div",lt,[t("p",nt,[dt,h(t("input",{type:"password",name:"old",id:"old",minlength:"6",autocomplete:"off",class:"text-gray-01 px-2 py-1","onUpdate:modelValue":e[4]||(e[4]=o=>a.password.oldPassword=o),disabled:!a.isPasswordEditor},null,8,ct),[[c,a.password.oldPassword,void 0,{trim:!0}]])]),t("p",pt,[ut,h(t("input",{type:"password",name:"newPassword",id:"newPassword",minlength:"6",autocomplete:"off",class:"text-gray-01 px-2 py-1","onUpdate:modelValue":e[5]||(e[5]=o=>a.password.newPassword=o),disabled:!a.isPasswordEditor},null,8,ht),[[c,a.password.newPassword,void 0,{trim:!0}]])]),t("p",ft,[gt,h(t("input",{type:"password",name:"check",id:"check",minlength:"6",autocomplete:"off",class:"text-gray-01 px-2 py-1","onUpdate:modelValue":e[6]||(e[6]=o=>a.password.check=o),disabled:!a.isPasswordEditor},null,8,mt),[[c,a.password.check,void 0,{trim:!0}]])])]),t("button",{type:"button",class:"btn-outline h-1/2 mt-3",onClick:e[7]||(e[7]=_(o=>r.editor("修改密碼",o),["prevent"]))}," 編輯 ")])]),v(m,{to:"/",class:"block mt-32 p-4 w-full text-xl text-gray-02 text-center bg-brand-03 bg-opacity-20 cursor-pointer hover:bg-gray-03 hover:bg-opacity-50",onClick:e[8]||(e[8]=()=>s.signOut())},{default:y(()=>[u(" 登出 ")]),_:1})])}const vt=P(L,[["render",wt],["__scopeId","data-v-a2b014d6"]]);export{vt as default};
