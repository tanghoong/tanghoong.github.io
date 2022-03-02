import{F as k,A as M,D as I,P as T,L as A,a as N,b as E,S as O,T as D,c as U,d as V,e as H,f as z,g as G,C as Y,V as _,h as J,i as W,j as K,k as j,l as X,m as Q,n as Z,I as x,o as ii,R as ei,p as ai,q as ti,r as si,s as li,G as oi,t as ni,u as ri,v as di,w as ci,x as vi,y as ui,z as pi,B as mi,M as bi,E as fi,H as hi,J as gi,N as ki,K as $i,O as wi,Q as yi,U as qi,W as Pi,X as Si,Y as Bi,Z as Li,_ as Ri,$ as Ci}from"./vendor.0652cc35.js";const Fi=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}};Fi();k.use([M,I,T,A,N,E,O,D,U,V,H,z,G,Y,_,J,W,K,j,X,Q,Z,x,ii,ei,ai,ti,si,li,oi,ni,ri,di,ci,vi,ui,pi,mi,bi,fi,hi,gi,ki,$i,wi,yi,qi,Pi,Si,Bi,Li,Ri]);function $(){return function(i){var l=i.$,a=i.$h,n=i.$root,e=i.$f7,s=i.$f7route,t=i.$f7router,c=i.$theme,o=i.$update,v=i.$store;return a`
  <div class="page" data-name="home">
    <!-- Top Navbar -->
    <div class="navbar navbar-large">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
          <a href="#" class="link icon-only panel-open" data-panel="left">
            <i class="icon f7-icons if-not-md">menu</i>
            <i class="icon material-icons if-md">menu</i>
          </a>
        </div>
        <div class="title sliding">Frenbase</div>
        <div class="right">
          <a href="#" class="link icon-only panel-open" data-panel="right">
            <i class="icon f7-icons if-not-md">menu</i>
            <i class="icon material-icons if-md">menu</i>
          </a>
        </div>
        <div class="title-large">
          <div class="title-large-text">Frenbase</div>
        </div>
      </div>
    </div>

    <!-- Scrollable page content-->
    <div class="page-content">
      <div class="block block-strong">
        <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

        <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
      </div>
      <div class="block-title">Navigation</div>
      <div class="list">
        <ul>
          <li>
            <a href="/about/" class="item-content item-link">
              <div class="item-inner">
                <div class="item-title">About</div>
              </div>
            </a>
          </li>
          <li>
            <a href="/form/" class="item-content item-link">
              <div class="item-inner">
                <div class="item-title">Form</div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div class="block-title">Modals</div>
      <div class="block block-strong">
        <div class="row">
          <div class="col-50">
            <a href="#" class="button button-raised button-fill popup-open" data-popup="#my-popup">Popup</a>
          </div>
          <div class="col-50">
            <a href="#" class="button button-raised button-fill login-screen-open" data-login-screen="#my-login-screen">Login Screen</a>
          </div>
        </div>
      </div>

      <div class="block-title">Panels</div>
      <div class="block block-strong">
        <div class="row">
          <div class="col-50">
            <a href="#" class="button button-raised button-fill panel-open" data-panel="left">Left Panel</a>
          </div>
          <div class="col-50">
            <a href="#" class="button button-raised button-fill panel-open" data-panel="right">Right Panel</a>
          </div>
        </div>
      </div>

      <div class="list links-list">
        <ul>
          <li>
            <a href="/dynamic-route/blog/45/post/125/?foo=bar#about">Dynamic (Component) Route</a>
          </li>
          <li>
            <a href="/load-something-that-doesnt-exist/">Default Route (404)</a>
          </li>
          <li>
            <a href="/request-and-load/user/123456/">Request Data & Load</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
`}}$.id="d1b3be07c7";function w(){return function(i){var l=i.$,a=i.$h,n=i.$root,e=i.$f7,s=i.$f7route,t=i.$f7router,c=i.$theme,o=i.$update,v=i.$store;return a`
<div class="page" data-name="about">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="left">
        <a href="#" class="link back">
          <i class="icon icon-back"></i>
          <span class="if-not-md">Back</span>
        </a>
      </div>
      <div class="title">About</div>
    </div>
  </div>
  <div class="page-content">
    <div class="block-title">About My App</div>
    <div class="block block-strong">
      <p>Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis sint nemo consequuntur, fugiat. Eius perferendis animi autem incidunt vel quod tenetur nostrum, voluptate omnis quasi quidem illum consequuntur, a, quisquam.</p>
      <p>Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi harum, optio qui, consequuntur? Obcaecati dolor sequi nesciunt culpa quia perspiciatis, reiciendis ex debitis, ut tenetur alias.</p>
    </div>
    <div class="block">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestiae laudantium dignissimos est nobis delectus nemo ea alias voluptatum architecto, amet similique, saepe iste consectetur in repellat ut minus quibusdam!</p>
      <p>Molestias et distinctio porro nesciunt ratione similique, magni doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a recusandae, fugiat in ea voluptates fuga eius, velit corrupti reprehenderit dignissimos consequatur!</p>
      <p>Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!</p>
    </div>
  </div>
</div>
`}}w.id="292a813e5c";function y(){return function(i){var l=i.$,a=i.$h,n=i.$root,e=i.$f7,s=i.$f7route,t=i.$f7router,c=i.$theme,o=i.$update,v=i.$store;return a`
<div class="page" data-name="form">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="left">
        <a href="#" class="link back">
          <i class="icon icon-back"></i>
          <span class="if-not-md">Back</span>
        </a>
      </div>
      <div class="title">Form</div>
    </div>
  </div>
  <div class="page-content">
    <div class="block-title">Form Example</div>
    <div class="list no-hairlines-md">
      <ul>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Name</div>
              <div class="item-input-wrap">
                <input type="text" placeholder="Your name"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">E-mail</div>
              <div class="item-input-wrap">
                <input type="email" placeholder="E-mail"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">URL</div>
              <div class="item-input-wrap">
                <input type="url" placeholder="URL"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Password</div>
              <div class="item-input-wrap">
                <input type="password" placeholder="Password"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Phone</div>
              <div class="item-input-wrap">
                <input type="tel" placeholder="Phone"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Gender</div>
              <div class="item-input-wrap">
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Birth date</div>
              <div class="item-input-wrap">
                <input type="date" placeholder="Birth day" value="2014-04-30"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title">Toggle</div>
              <div class="item-after">
                <label class="toggle toggle-init">
                  <input type="checkbox"/>
                  <span class="toggle-icon"></span>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Slider</div>
              <div class="item-input-wrap">
                <div class="range-slider range-slider-init" data-label="true">
                  <input type="range" value="50" min="0" max="100" step="1"/>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Textarea</div>
              <div class="item-input-wrap">
                <textarea placeholder="Bio"></textarea>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Resizable</div>
              <div class="item-input-wrap">
                <textarea placeholder="Bio" class="resizable"></textarea>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="block-title">Buttons</div>
    <div class="block block-strong">
      <p class="row">
        <a href="#" class="col button">Button</a>
        <a href="#" class="col button button-fill">Fill</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-raised">Raised</a>
        <a href="#" class="col button button-raised button-fill">Raised Fill</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-round">Round</a>
        <a href="#" class="col button button-round button-fill">Round Fill</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-outline">Outline</a>
        <a href="#" class="col button button-round button-outline">Outline Round</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-small button-outline">Small</a>
        <a href="#" class="col button button-small button-round button-outline">Small Round</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-small button-fill">Small</a>
        <a href="#" class="col button button-small button-round button-fill">Small Round</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-large button-raised">Large</a>
        <a href="#" class="col button button-large button-fill button-raised">Large Fill</a>
      </p>

      <p class="row">
        <a href="#" class="col button button-large button-fill button-raised color-red">Large Red</a>
        <a href="#" class="col button button-large button-fill button-raised color-green">Large Green</a>
      </p>

    </div>
    <div class="block-title">Checkbox group</div>
    <div class="list">
      <ul>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Books" checked="checked"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Books</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Movies"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Movies</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Food"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Food</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Drinks"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Drinks</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
    <div class="block-title">Radio buttons group</div>
    <div class="list">
      <ul>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Books" checked="checked"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Books</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Movies"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Movies</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Food"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Food</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Drinks"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Drinks</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </div>
</div>
`}}y.id="3689d57671";function q(i,{$store:l}){const a=l.getters.products,n=()=>{l.dispatch("addProduct",{id:"4",title:"Apple iPhone 12",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."})};return function(e){var s=e.$,t=e.$h,c=e.$root,o=e.$f7,v=e.$f7route,u=e.$f7router,r=e.$theme,d=e.$update,m=e.$store;return t`
  <div class="page" data-name="catalog">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="title">Catalog</div>
      </div>
    </div>
    <div class="page-content">
      <div class="list links-list">
        <ul>
          ${a.value.map(b=>t`
            <li><a href="/product/${b.id}/">${b.title}</a></li>
          `)}
        </ul>
      </div>
      ${a.value.length===3&&t`
        <div class="block">
          <button class="button button-fill" @click=${n}>Add Product</Button>
        </div>
      `}
    </div>
  </div>
`}}q.id="eddd8d619e";function P(i,{$f7route:l,$store:a}){const n=a.getters.products,e=l.params.id;let s;return n.value.forEach(t=>{t.id===e&&(s=t)}),function(t){var c=t.$,o=t.$h,v=t.$root,u=t.$f7,r=t.$f7route,d=t.$f7router,m=t.$theme,b=t.$update,g=t.$store;return o`
  <div class="page" data-name="product">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">${s.title}</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block-title">About ${s.title}</div>
      <div class="block block-strong">
        ${s.description}
      </div>
    </div>
  </div>
`}}P.id="54aa9b4f08";function S(){return function(i){var l=i.$,a=i.$h,n=i.$root,e=i.$f7,s=i.$f7route,t=i.$f7router,c=i.$theme,o=i.$update,v=i.$store;return a`
<div class="page" data-name="settings">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="title">Settings</div>
    </div>
  </div>
  <div class="page-content">
    <div class="block-title">Form Example</div>
    <div class="list no-hairlines-md">
      <ul>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Name</div>
              <div class="item-input-wrap">
                <input type="text" placeholder="Your name"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">E-mail</div>
              <div class="item-input-wrap">
                <input type="email" placeholder="E-mail"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">URL</div>
              <div class="item-input-wrap">
                <input type="url" placeholder="URL"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Password</div>
              <div class="item-input-wrap">
                <input type="password" placeholder="Password"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Phone</div>
              <div class="item-input-wrap">
                <input type="tel" placeholder="Phone"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Gender</div>
              <div class="item-input-wrap">
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Birth date</div>
              <div class="item-input-wrap">
                <input type="date" placeholder="Birth day" value="2014-04-30"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title">Toggle</div>
              <div class="item-after">
                <label class="toggle toggle-init">
                  <input type="checkbox"/>
                  <span class="toggle-icon"></span>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Slider</div>
              <div class="item-input-wrap">
                <div class="range-slider range-slider-init" data-label="true">
                  <input type="range" value="50" min="0" max="100" step="1"/>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Textarea</div>
              <div class="item-input-wrap">
                <textarea placeholder="Bio"></textarea>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Resizable</div>
              <div class="item-input-wrap">
                <textarea placeholder="Bio" class="resizable"></textarea>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="block-title">Buttons</div>
    <div class="block block-strong">
      <p class="row">
        <a href="#" class="col button">Button</a>
        <a href="#" class="col button button-fill">Fill</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-raised">Raised</a>
        <a href="#" class="col button button-raised button-fill">Raised Fill</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-round">Round</a>
        <a href="#" class="col button button-round button-fill">Round Fill</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-outline">Outline</a>
        <a href="#" class="col button button-round button-outline">Outline Round</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-small button-outline">Small</a>
        <a href="#" class="col button button-small button-round button-outline">Small Round</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-small button-fill">Small</a>
        <a href="#" class="col button button-small button-round button-fill">Small Round</a>
      </p>
      <p class="row">
        <a href="#" class="col button button-large button-raised">Large</a>
        <a href="#" class="col button button-large button-fill button-raised">Large Fill</a>
      </p>

      <p class="row">
        <a href="#" class="col button button-large button-fill button-raised color-red">Large Red</a>
        <a href="#" class="col button button-large button-fill button-raised color-green">Large Green</a>
      </p>

    </div>
    <div class="block-title">Checkbox group</div>
    <div class="list">
      <ul>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Books" checked="checked"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Books</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Movies"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Movies</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Food"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Food</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-checkbox item-content">
            <input type="checkbox" name="checkbox" value="Drinks"/>
            <i class="icon icon-checkbox"></i>
            <div class="item-inner">
              <div class="item-title">Drinks</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
    <div class="block-title">Radio buttons group</div>
    <div class="list">
      <ul>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Books" checked="checked"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Books</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Movies"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Movies</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Food"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Food</div>
            </div>
          </label>
        </li>
        <li>
          <label class="item-radio item-content">
            <input type="radio" name="radio" value="Drinks"/>
            <i class="icon icon-radio"></i>
            <div class="item-inner">
              <div class="item-title">Drinks</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </div>
</div>
`}}S.id="b405a2e797";function h(i,{$f7:l,$on:a,$onBeforeMount:n,$onMounted:e,$onBeforeUnmount:s,$onUnmounted:t}){let c="Jimmy",o=25,v=["Tennis","Chess","Football"];const u=()=>{l.dialog.alert("Hello World")};return n(()=>{console.log("onBeforeMount")}),e(()=>{console.log("onMounted")}),s(()=>{console.log("onBeforeUnmount")}),t(()=>{console.log("onUnmounted")}),a("pageMounted",(r,d)=>{console.log("pageMounted",d)}),a("pageInit",(r,d)=>{console.log("pageInit",d)}),a("pageBeforeIn",(r,d)=>{console.log("pageBeforeIn",d)}),a("pageAfterIn",(r,d)=>{console.log("pageAfterIn",d)}),a("pageBeforeOut",(r,d)=>{console.log("pageBeforeOut",d)}),a("pageAfterOut",(r,d)=>{console.log("pageAfterOut",d)}),a("pageBeforeRemove",(r,d)=>{console.log("pageBeforeRemove",d)}),function(r){var d=r.$,m=r.$h,b=r.$root,g=r.$f7,p=r.$f7route,C=r.$f7router,f=r.$theme,Ti=r.$update,Ai=r.$store;return m`
  <div class="page">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link back">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">Component Page</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block block-strong">
        <p>Component page template is compiled as ES Template. In addition it has lifecycle hooks, events handling, data managment and Virtual DOM data bindings.</p>
        <p>It is useful to use Component page when you need page-specific logic.</p>
      </div>
      <div class="block-title">Events Handling</div>
      <div class="block block-strong">
        <a href="#" class="button button-raised" @click=${u}>Open Alert</a>
      </div>
      <div class="block-title">Page Component Data</div>
      <div class="block block-strong">
        <p>Hello! My name is ${c}. I am ${o} years old.</p>
        <p>I like to play:</p>
        <ul>
          ${v.map(F=>m`
          <li>${F}</li>
          `)}
        </ul>
      </div>
      <div class="block-title">Extended Context</div>
      <div class="block block-strong">
        <p>Component page context as Template7 page context is also extended with some additional variables.</p>
        <h4>$f7route</h4>
        <p>Contains properties of the current route:</p>
        <ul style="padding-left:25px">
          <li><b>$f7route.url</b>: ${p.url}</li>
          <li><b>$f7route.path</b>: ${p.path}</li>
          <li><b>$f7route.params</b>: ${JSON.stringify(p.params)}</li>
          <li><b>$f7route.hash</b>: ${p.hash}</li>
          <li><b>$f7route.query</b>: ${JSON.stringify(p.query)}</li>
        </ul>

        <h4>$theme</h4>
        <p>Currently active theme:</p>
        <ul style="padding-left:25px">
          <li><b>$theme.ios</b>: ${f.ios}</li>
          <li><b>$theme.md</b>: ${f.md}</li>
          <li><b>$theme.aurora</b>: ${f.aurora}</li>
        </ul>
      </div>
    </div>
  </div>
`}}h.id="85d3829d2f";h.style=`
  p {
    margin: 10px 0;
  }
`;function B(i){const l=i.user;return function(a){var n=a.$,e=a.$h,s=a.$root,t=a.$f7,c=a.$f7route,o=a.$f7router,v=a.$theme,u=a.$update,r=a.$store;return e`
  <div class="page">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="back link">
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </a>
        </div>
        <div class="title">${l.firstName} ${l.lastName}</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block block-strong">
        ${l.about}
      </div>
      <div class="list links-list">
        <ul>
          ${l.links.map(d=>e`
            <li><a class="external" target="_blank" href="${d.url}">${d.title}</a></li>
          `)}
        </ul>
      </div>
    </div>
  </div>
`}}B.id="4f45c427e2";function L(){return function(i){var l=i.$,a=i.$h,n=i.$root,e=i.$f7,s=i.$f7route,t=i.$f7router,c=i.$theme,o=i.$update,v=i.$store;return a`
<div class="page">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner sliding">
      <div class="left">
        <a href="#" class="link back">
          <i class="icon icon-back"></i>
          <span class="if-not-md">Back</span>
        </a>
      </div>
      <div class="title">Not found</div>
    </div>
  </div>
  <div class="page-content">
    <div class="block block-strong">
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </div>
  </div>
</div>
`}}L.id="3862018a97";var Mi=[{path:"/",component:$},{path:"/about/",component:w},{path:"/form/",component:y},{path:"/catalog/",component:q},{path:"/product/:id/",component:P},{path:"/settings/",component:S},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:h},{path:"/request-and-load/user/:userId/",async:function({router:i,to:l,resolve:a}){var n=i.app;n.preloader.show();var e=l.params.userId;setTimeout(function(){var s={firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]};n.preloader.hide(),a({component:B},{props:{user:s}})},1e3)}},{path:"(.*)",component:L}];const Ii=Ci({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:i}){return i.products}},actions:{addProduct({state:i},l){i.products=[...i.products,l]}}});function R(i,{$f7:l,$update:a}){let n="",e="";const s=o=>{n=o.target.value,a()},t=o=>{e=o.target.value,a()},c=()=>{l.dialog.alert("Username: "+n+"<br/>Password: "+e,()=>{l.loginScreen.close()})};return function(o){var v=o.$,u=o.$h,r=o.$root,d=o.$f7,m=o.$f7route,b=o.$f7router,g=o.$theme,p=o.$update,C=o.$store;return u`
  <div id="app">

    <!-- Left panel with cover effect-->
    <div class="panel panel-left panel-cover theme-dark panel-init">
      <div class="view">
        <div class="page">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
              <div class="title">Left Panel</div>
            </div>
          </div>
          <div class="page-content">
            <div class="block">Left panel content goes here</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Right panel with reveal effect-->
    <div class="panel panel-right panel-reveal theme-dark">
      <div class="view">
        <div class="page">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
              <div class="title">Right Panel</div>
            </div>
          </div>
          <div class="page-content">
            <div class="block">Right panel content goes here</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Views/Tabs container -->
    <div class="views tabs safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <div class="toolbar toolbar-bottom tabbar-labels">
        <div class="toolbar-inner">
          <a href="#view-home" class="tab-link tab-link-active">
            <i class="icon f7-icons if-not-md">house_fill</i>
            <i class="icon material-icons if-md">home</i>
            <span class="tabbar-label">Home</span>
          </a>
          <a href="#view-catalog" class="tab-link">
            <i class="icon f7-icons if-not-md">square_list_fill</i>
            <i class="icon material-icons if-md">view_list</i>
            <span class="tabbar-label">Catalog</span>
          </a>
          <a href="#view-settings" class="tab-link">
            <i class="icon f7-icons if-not-md">gear</i>
            <i class="icon material-icons if-md">settings</i>
            <span class="tabbar-label">Settings</span>
          </a>
        </div>
      </div>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <div id="view-home" class="view view-main view-init tab tab-active" data-url="/">
        <!-- Home page will be loaded here dynamically from / route -->
      </div>

      <!-- Catalog View -->
      <div id="view-catalog" class="view view-init tab" data-name="catalog" data-url="/catalog/">
        <!-- Catalog page will be loaded here dynamically from /catalog/ route -->
      </div>

      <!-- Settings View -->
      <div id="view-settings" class="view view-init tab" data-name="settings" data-url="/settings/">
        <!-- Settings page will be loaded here dynamically from /settings/ route -->
      </div>
    </div>


    <!-- Popup -->
    <div class="popup" id="my-popup">
      <div class="view">
        <div class="page">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
              <div class="title">Popup</div>
              <div class="right">
                <a href="#" class="link popup-close">Close</a>
              </div>
            </div>
          </div>
          <div class="page-content">
            <div class="block">
              <p>Popup content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Login Screen -->
    <div class="login-screen" id="my-login-screen">
      <div class="view">
        <div class="page">
          <div class="page-content login-screen-content">
            <div class="login-screen-title">Login</div>
            <div class="list">
              <ul>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Username</div>
                    <div class="item-input-wrap">
                      <input type="text" name="username" placeholder="Your username" value="${n}" @input="${s}"/>

                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Password</div>
                    <div class="item-input-wrap">
                      <input type="password" name="password" placeholder="Your password" value="${e}" @input="${t}"/>

                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li>
                  <a href="#" class="item-link list-button login-button" @click="${c}">Sign In</a>

                </li>
              </ul>
              <div class="block-footer">Some text about login information.<br/>Click "Sign In" to close Login Screen</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
`}}R.id="2e5bcf2a29";var Ei=new k({name:"Frenbase",theme:"auto",el:"#app",component:R,store:Ii,routes:Mi,serviceWorker:{path:"/service-worker.js"}});
