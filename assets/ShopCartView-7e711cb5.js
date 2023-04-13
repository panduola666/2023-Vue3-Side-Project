import{T as P}from"./TotalPrice-c07ab855.js";import{S as B}from"./ShopStep-535ea68e.js";import{m as y,b as v,u as I,p as S,f as N,i as j}from"./vueLoadingStore-98d1fb2a.js";import{t as V}from"./index-07d2539f.js";import{b6 as $,av as T,aj as t,l as s,j as A,s as w,T as U,t as k,b1 as C,k as b,m as o,F as u,at as _,aJ as i}from"./_plugin-vue_export-helper-01f09012.js";const{VITE_BASEURL:H}={VITE_BASEURL:"https://2023-vue3-eastern-tea-aroma.onrender.com",BASE_URL:"/2023-Vue3-Eastern-Tea-Aroma/",MODE:"production",DEV:!1,PROD:!0},J={computed:{...y(I,["user"]),...y(S,["allProducts"]),...y(N,["courses"]),...y(j,["discountData"]),totalPrice(){var p,d;const e=(p=this.user.shoppingCart)==null?void 0:p.cart.products.reduce((m,a)=>m+=a.totalPrice,0),n=(d=this.user.shoppingCart)==null?void 0:d.cart.courses.reduce((m,a)=>m+=a.totalPrice,0);return e+n},cartNumber(){var e,n;return((e=this.user.shoppingCart)==null?void 0:e.cart.products.length)+((n=this.user.shoppingCart)==null?void 0:n.cart.courses.length)}},methods:{...v(I,["getUserData"]),...v(S,["getAllProducts"]),...v(N,["getCoursesData"]),toThousand:V,patchCartAJAX(e){this.$http.patch(`${H}/users/${sessionStorage.getItem("userId")}`,{shoppingCart:e}).then(()=>{this.$swal.fire({icon:"success",title:"修改成功",showConfirmButton:!1,timer:1500,allowOutsideClick:!1})})},changeNumber(e,n){n.number=+e.target.value,n.totalPrice=n.number*n.price,this.patchCartAJAX(this.user.shoppingCart)},deleteCart(e,n,p){const{cart:d}=this.user.shoppingCart;this.$swal.fire({html:`<p class="text-lg">是否刪除 <span class="text-brand-01 text-xl font-bold">${p}</span> ?</p>`,showCancelButton:!0,reverseButtons:!0}).then(m=>{if(m.isConfirmed){if(e==="product"){const a=d.products.findIndex(g=>g.productId===n);d.products.splice(a,1)}if(e==="course"){const a=d.courses.findIndex(g=>g.courseDateId===n);d.courses.splice(a,1)}this.patchCartAJAX(this.user.shoppingCart)}})},listChecked(){let e=!1;this.user.shoppingCart.cart.courses.forEach(n=>{this.courses.forEach(p=>{p.id===n.courseId&&p.courseDates.forEach(d=>{if(d.id===n.courseDateId){if(e)return;e=d.end<Date.now()}})})}),e?this.$swal.fire({icon:"error",title:"內含過期課程,無法購買",showConfirmButton:!1,timer:1500,allowOutsideClick:!1}):this.$router.push({name:"buyerInfo"})}},mounted(){this.getUserData(),this.getAllProducts(),this.getCoursesData()},components:{TotalPrice:P,ShopStep:B}},L={class:"wrap"},O={key:1,class:"flex items-center gap-3"},R=o("img",{src:"https://cdn-icons-png.flaticon.com/512/3648/3648756.png",alt:"購物車沒有商品"},null,-1),Y={class:"flex-grow text-center"},M=o("p",{class:"text-4xl mb-3"},"購物車沒有商品",-1),X={key:2,class:"grid gap-5 mt-4"},z={key:0,class:"grid lg:grid-cols-3 bg-white relative"},F={key:0,class:"bg-brand-02 text-white px-3 py-1 absolute z-10"},q=["src","alt"],G={class:"lg:col-span-2 p-4 flex flex-col justify-between gap-3"},K={class:"flex gap-5 flex-wrap items-center"},Q=["for"],W=["name","id","value","onChange"],Z=["value"],ee={class:"sm:flex flex-wrap items-center justify-between"},te={key:0,class:"flex items-center"},se={class:"text-gray-02 mr-3"},oe={key:0},re={key:1},ae={key:1,class:"text-lg flex flex-wrap items-center gap-2 whitespace-nowrap"},ne=["onClick"],le={key:0,class:"grid lg:grid-cols-3 bg-white relative"},ce={key:0,class:"bg-brand-02 text-white px-3 py-1 absolute z-10"},ie={class:"w-full lg:h-[200px] h-48 relative"},ue=["src","alt"],de=o("span",{class:"absolute bg-brand-02 bg-opacity-60 text-white py-2 px-4 text-xl top-0 right-0"},"課程 ",-1),he={class:"lg:col-span-2 p-4 flex flex-col justify-between gap-3"},pe={class:"flex lg:items-center justify-between flex-col-reverse lg:flex-row"},fe={key:0,class:"bg-red-500 text-white py-2 px-3 text-xl font-semibold text-center"},_e={class:"text-lg"},me={class:"flex gap-5 flex-wrap items-center"},be=["for"],ge=["name","id","value","onChange"],xe=["value"],ye={class:"sm:flex flex-wrap justify-between"},we={key:0,class:"flex items-center"},ke={class:"text-gray-02 mr-3"},Ce={key:0},De={key:1},ve={key:1,class:"text-lg flex flex-wrap items-center gap-2 whitespace-nowrap"},Te=["onClick"];function Ie(e,n,p,d,m,a){const g=T("ShopStep"),E=T("TotalPrice"),D=T("router-link");return t(),s("main",L,[(t(),A(U,{to:"title"},[w("購買清單")])),k(g),a.cartNumber?(t(),A(E,{key:0},{default:C(()=>[o("button",{type:"button",class:"btn-primary block",onClick:n[0]||(n[0]=()=>a.listChecked())}," 確認購買 ")]),_:1})):b("",!0),a.cartNumber?(t(),s("ul",X,[(t(!0),s(u,null,_(e.allProducts,r=>{var h;return t(),s(u,{key:r.id+r.name},[(t(!0),s(u,null,_((h=e.user.shoppingCart)==null?void 0:h.cart.products,c=>{var l;return t(),s(u,{key:"產品"+c.productId},[r.id===c.productId?(t(),s("li",z,[c.isDiscount?(t(),s("span",F,"優惠")):b("",!0),o("img",{src:r.coverUrl,alt:r.name,class:"w-full lg:h-[200px] h-48 object-cover"},null,8,q),o("div",G,[o("h1",null,[k(D,{to:`/product/${r.id}`,class:"truncate text-brand-02 underline hover:text-brand-01 text-2xl font-self font-black"},{default:C(()=>[w(i(r.name),1)]),_:2},1032,["to"])]),o("div",K,[o("label",{for:r.name+"productNumber"},"數量",8,Q),o("select",{name:r.name+"productNumber",id:r.name+"productNumber",class:"border border-black lg:w-1/4 w-1/2",value:c.number,onChange:f=>a.changeNumber(f,c)},[(t(),s(u,null,_(20,f=>o("option",{value:f,key:f},i(f),9,Z)),64))],40,W)]),o("div",ee,[r.isDiscount&&e.discountData.end>new Date&&((l=this.user.shoppingCart)==null?void 0:l.discount)===e.discountData.code?(t(),s("div",te,[o("del",se,"$ "+i(a.toThousand(c.number*c.price)),1),e.discountData.type==="money"?(t(),s("p",oe," $ "+i(a.toThousand(c.number*c.price-e.discountData.scale)),1)):(t(),s("p",re," $ "+i(a.toThousand(c.number*c.price*e.discountData.scale)),1))])):(t(),s("p",ae," $ "+i(a.toThousand(c.number*c.price)),1)),o("button",{type:"button",class:"btn-outline py-1 px-3 float-right mt-2 sm:mt-0",onClick:()=>a.deleteCart("product",c.productId,r.name)}," 刪除 ",8,ne)])])])):b("",!0)],64)}),128))],64)}),128)),(t(!0),s(u,null,_(e.courses,r=>(t(),s(u,{key:r.id+r.title},[(t(!0),s(u,null,_(r.courseDates,h=>{var c;return t(),s(u,{key:h.id+"date"},[(t(!0),s(u,null,_((c=e.user.shoppingCart)==null?void 0:c.cart.courses,l=>{var f;return t(),s(u,{key:"課程"+l.courseDateId},[r.id===l.courseId&&h.id===l.courseDateId?(t(),s("li",le,[l.isDiscount?(t(),s("span",ce,"優惠")):b("",!0),o("div",ie,[o("img",{src:r.coverUrl,alt:r.title,class:"w-full h-full object-cover"},null,8,ue),de]),o("div",he,[o("h1",pe,[k(D,{to:`/course/${h.id}`,class:"truncate text-brand-02 underline hover:text-brand-01 text-2xl font-self font-black"},{default:C(()=>[w(i(r.title),1)]),_:2},1032,["to"]),h.end<Date.now()?(t(),s("div",fe," 課程已結束 ")):b("",!0)]),o("p",_e," 時間："+i(e.$date(h.start).format("YYYY-MM-DD HH:mm"))+" ~ "+i(e.$date(h.end).format("HH:mm")),1),o("div",me,[o("label",{for:r.title+"courseNumber"},"數量",8,be),o("select",{name:r.title+"courseNumber",id:r.title+"courseNumber",class:"border border-black lg:w-1/4 w-1/2",value:l.number,onChange:x=>a.changeNumber(x,l)},[(t(),s(u,null,_(20,x=>o("option",{value:x,key:x},i(x),9,xe)),64))],40,ge)]),o("div",ye,[h.isDiscount&&e.discountData.end>new Date&&((f=this.user.shoppingCart)==null?void 0:f.discount)===e.discountData.code?(t(),s("div",we,[o("del",ke,"$ "+i(a.toThousand(l.number*l.price)),1),e.discountData.type==="money"?(t(),s("p",Ce," $ "+i(a.toThousand(l.number*l.price-e.discountData.scale)),1)):(t(),s("p",De," $ "+i(a.toThousand(l.number*l.price*e.discountData.scale)),1))])):(t(),s("p",ve," $ "+i(a.toThousand(l.number*l.price)),1)),o("button",{type:"button",class:"btn-outline py-1 px-3 float-right mt-2 sm:mt-0",onClick:()=>a.deleteCart("course",l.courseDateId,r.title)}," 刪除 ",8,Te)])])])):b("",!0)],64)}),128))],64)}),128))],64))),128))])):(t(),s("div",O,[R,o("div",Y,[M,k(D,{to:"/courses",class:"btn-primary inline-block text-xl"},{default:C(()=>[w("來去選購")]),_:1})])]))])}const Be=$(J,[["render",Ie]]);export{Be as default};
