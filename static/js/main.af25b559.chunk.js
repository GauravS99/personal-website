(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a,c=n(1),i=n(2),s=n.n(i),r=n(8),o=n.n(r),l=(n(15),n(16),n(17),n(3)),d=n(4),h=n(6),m=n(5),p=n(19),b=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.flipped,n=e.item,a=n.date,i=n.heading,s=n.description,r=n.technologies,o=n.classification,l=n.img_src,d=n.link,h=Object(c.jsx)("div",{className:"d-inline-block ".concat(t?"vertical-center":"timeline-item-date"),children:Object(c.jsx)("h5",{className:"m-0 color-4",children:a})}),m=Object(c.jsxs)("div",{className:"card p-3 timeline-item-content color-1",children:[l&&Object(c.jsx)("img",{className:"card-img-top",src:l,alt:i}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"date-internal card-title mb-2 color-4",children:a}),Object(c.jsx)("h5",{className:"card-title timeline-heading",children:o?o+" - "+i:i}),s&&Object(c.jsx)("p",{className:"card-text",children:s}),r&&Object(c.jsxs)("p",{className:"card-text",children:[Object(c.jsx)("p",{className:"font-weight-bold d-inline-block mr-2 mb-0",children:" Technologies Used: "}),r]}),d&&Object(c.jsxs)("a",{className:"d-block",href:d,target:"_blank",rel:"noreferrer",children:[Object(c.jsx)(p.c,{style:{height:20,width:20,marginRight:7,marginBottom:5}}),d]})]})]});if(t){var b=h;h=m,m=b}return Object(c.jsxs)("div",{className:"row no-gutters align-items-stretch justify-content-center timeline-item",children:[Object(c.jsx)("div",{className:"".concat(t?"show-timeline":"hide-timeline"," col-5 py-3"),children:h}),Object(c.jsxs)("div",{className:"hide-timeline col-2 text-center color-4",children:[Object(c.jsx)("div",{className:"verticalLine horizontal-center",children:"\xa0"}),Object(c.jsx)("div",{className:"timeline-circle circle center",children:"\xa0"})]}),Object(c.jsx)("div",{className:"".concat(t?"hide-timeline":"show-timeline"," col-5 py-3"),children:m})]})}}]),n}(i.Component);!function(e){e.project="Project",e.career="Career",e.hackathon="Hackathon",e.education="Education"}(a||(a={}));var u=[{date:"Nov 13, 2020",classification:a.project,heading:"Personal Website",description:"Self explanatory.",technologies:"React, TypeScript",img_src:"https://www.dropbox.com/s/f22r455bn8gzezd/personal-site.PNG?raw=1",link:"https://gauravs99.github.io/personal-website/"},{date:"May 12, 2020",classification:a.project,heading:"Grocer",description:"My friend came to me explaining a very real problem: the Filipino government was taking aggressive COVID-19 quarantine measures, preventing people from leaving their area even to get groceries. Her friends and family were relying on communicating with local farmers with WhatsApp to get supplies. This e-commerce website aims to help community leaders process grocery orders from the community.",technologies:"TypeScript, Express.js, React, Redux, MongoDB",link:"https://the-grocer.herokuapp.com"},{date:"May 4, 2020",classification:a.career,heading:"Software Developer Intern @ Thomson Reuters",description:"Began my 12 month internship at Thomson Reuters. Their tech stack is completely new for me, so I am hoping to learn a lot.",technologies:".NET Framework, .NET Core, C#, Microsoft SQL Server, Docker, Jenkins, AWS",img_src:"https://www.dropbox.com/s/xf273xzt0qesl8z/tr.jpg?raw=1"},{date:"Sep 13, 2019",classification:a.hackathon,heading:"Hack The North",img_src:"https://www.dropbox.com/s/7atgon5ht2ubtdc/hackthenorth.png?raw=1",description:"Sent some applications, completed some workshops, made some friends."},{date:"Sep 30, 2019",classification:a.career,heading:"Software Consultant @ OneTap",description:"This was my first paid role in technology, at a startup in downtown Toronto. I worked in a University of Toronto communal space for startups. I started working 10 hours a week part-time along with school, and now I am working 15 hours a week along with my full-time job at Thomson Reuters.",technologies:"Javascript, TypeScript, Express.js, React, Redux, Docker, MongoDB",link:"https://www.onetapcheckin.com/",img_src:"https://www.dropbox.com/s/rfoedtlfvmcwpnv/Logo_branded_horizontal-arial-p-800.png?raw=1"},{date:"Jun 2019",classification:a.project,heading:"Backup to Arweave Wordpress Plugin",description:"Using GitCoin, I found some open-source freelance work that would pay with Ethereum. Arweave is a company that is trying to use blockchain to provide distributed, permanent, storage of anything from text to entire websites.",technologies:"PHP, Wordpress, Javascript, Arweave API, CSS, HTML",link:"https://github.com/GauravS99/Arweave-Upload-WP"},{date:"Mar 23, 2019",classification:a.hackathon,heading:"UC Hacks Organizer",description:"Worked alongside other organizers to plan UC Hacks, the first ever hackathon at my university residence. I conducted a workshop teaching Firebase fundamentals for Android so that attendees could use it in a serverless application",img_src:"https://www.dropbox.com/s/i7doc2d5vmxd82m/logo.png?raw=1",link:"https://www.facebook.com/UCHackathon2019"},{date:"Sep 7, 2017",classification:a.education,heading:"University of Toronto",description:"Began my education pursing a degree in Computer Science and a minor in statistics",img_src:"https://www.dropbox.com/s/2pdkdgkyqcu2ibw/uoft.png?raw=1"}],g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"content px-3",children:u.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)(b,{flipped:t%2!==0,item:e})},"timeline-item_".concat(t))}))})}}]),n}(i.Component),j=function(e){return Object(c.jsx)("img",{src:e.src?e.src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAASFBMVEX09PSzs7Pe3t6fn5/Ixsfd3d2cnJz39/fh4eGwsLDz8/O1tbWZmZnZ2dnm5ubNzc3t7e3S0tK+vr7BwcGjo6OoqKjRz9DHxMaHEaMPAAAJtUlEQVR4nO2d2bajIBBFowIlTqgxN///pw04KyYOmMJenqfbDw3s1AgY83jcunXr1q1bt27dunULXVkWAQD2Kk4RVEnFSRj9h3iQJkHAWBLExf+CB1HzRxQ0knwxvT4dQBaHzZ+cBZ1YUono0nTwKHhCagSIB2hKku66toOcBAl76fXDDE3T+deEg/zJJE4Sgv7Ha46m6MrH9egg0mRBoMwGUARGNBl3r/xicACiJgsYkcU65ImZTOfM8FJwEFYtDCui9JUsGK3xS3ohOCADM1XBZ7KgDclLKPrggQvKsde8TpBX3+w0U1MnnNcONOmV5BJwe9Ak3AW8ErxdaAGLnTccFJvTSGu4DHvt3xRVO9ECVjpuOBB7zSYVfR8fU7DbbNJwwumuGfwDZgtYRRxum6HclyQ7uqR0lA4yfgxN0THhIhwQdhgtcHI/Bzsa5AU4lroFB9nSvnqH3GouITxK9nIVDrKjaGx8COYOHOSH/bES4yGSwhG4aN+2ZiBGyPRcNnMCznSouhGNh7OqX2FjKe3f1vQcfjj7fNjTAcPlR8lYlRrYAoa/oTvaQ0qHpL4fzrfrjKMbLjvkkSx5idA3sgUJ9j3IukTClBI2UVC9yiJUaEY2bMNB/sVsGoHHJRGiKIp0JOrXYIrN9BEhH6HA85PZpMeVQiaKWv4HGdmQU2U0X9EA7Em/IPVsxoxUYR6h6AcPFnyRFyu5NJvR/qgXPIuZhL2K9WCKbdpz1aNgnustuSR7biKTMjc3FR7bwraNVduMpkSNbIi9CQijJ73oVjLplGb74211jBcb7LUhh/Rs3OzbeGxGq20H85eKQIDXmkTzIGHVLjTfN7p3EKCxmfrkdCcbNaIlWNXbULmZ2BFrWuHLyIaVKKGYbZbjvWhLnQnWPgdmzQTbkf1bpUY2rDPm2SaAlbvNtlAF0Arc7DjhiNnMLSXatc6UjXkHzGZuTdxhK46gGcs3lk9GU7a9ZbuVocThxds4lxwoAIuGw8uT4+hPdtftznCzxxzw6tukBzySJWvDzVKlI32J3NscZZs3XmiPsI0fJzlUuFtNm5MECe3xGB28MnEcbeaVzI39W7J3dzOGG5+c4T0PO9p3MwsuqeCG35FAfKpy9OUhC6lEa1gIGN6d/rB4H67cnQaVBfFKf3gdbCVN1uoNh/nFgcGBCSO22EKvHxTxCe3BI7wHNwFDtr6tRDwzl8mkZ7NSAjRbV+NQb06H3fLhbrJTl0xQLxeHXZc1tP5OB22HoxX1oWEtTQ7YUC+8865xt1W6h2wV4iOwEPbtHz+BjYd4NSCnYRv37AQ21Q6gsYW0u++013L1bInwKZbhIvUgVmWfrfMF+TdWNslpv9+y2E52fq7TExJbRvsmwiJbazc9JEW6gFNs7QmHTbu1H5c6pMBiq5+gq5r2yB5bsyvUNydYyaRmqwPuBDYdbrhs5CS2ekRUtibgTmDTG0JcNv91Dlt9K4TLVgecvSOFhq1pBpDZxDls9TE1FltWr4XaZquzUzM4Zu1uLl/2PzQzl/oidXt3jsWWN2zqXMreUVCdeZvPimL1k1HDpgPO3lGQ7yuXbNwgxGXTa7G4NfVDzrotE9qJSditJbFx+dZJJO1JLtretEsmJLFpNvVhtadmWKmkSyZ++rRJptQewFMstD7grFptIIr4nPlZTB0b4j1OZjPzm9gQv5ATncyG+k6yc50S0yX7THmSMNHONRxiltQ61XC4aPpO4CThRpvSaakS2yM1nNxkUcuAcjyKtbsZKQr9MLOLloWhA1arBXZTCnXqdUh2ow6z1TLIbsC5ZDbLOwIn0kgvm8nEhew/lM1kgl+0x7KaTNxKJVabZsfCzWbAuRZuNgPOtXCTsoWGv7WZy9a5kHsuaS9TOuiS1loT57Kkkp1s4qLZHrayiWuFu5YNw1E33s0413E0V81mw3AuFoBGx1MlNsGyjhrO0SSpBceaE2cTiVZ0zG6uJpJaR7zSZY9UOuKV7ubIRvtb5tRtj5SKip1wlLjPRnc+IiSe7rP5hfB3mE6Qt/ts1CfbX9Eo0a7Blj43w0m0a7DJlW6LOarQLsLmk7fYEHKUkGuw6dsqtdrVD/kWpGHDXvk3QW2v9E3Iui/qU/Fu2dz+1UXIn81TosV7nelaoylxgb3+DwLf4+2Dxn9v8pZR9zlhpmQo+Z+duugeCgT3vO57p3/a18QH26XkPWbzPO7Y7/60ikqJ1rP5f/WKhbnBTAsylafgCDaGQZDHCm3AVsdcjZfS/sXEoU8NYA2b9EvnftUbMk02YuvhZBIkQvxJFX9/wsTVsUk6x04WIGzQRmyziPosr4Vzqhj0aGO2tuXYxuZxhx4wAb9D86bfzy/WW87r4Zz5ZeiB1eZsYfodasbmDFyXRoxs0i//VkadN4RzIuYgH6IZ2KTpxCo4bwTnQrbMY+8Lmz9trtaweZ4Dp5UlX8Em6RbL2hJbjL2fgyf3VrEZu6yPbBz5F4Z1e7ySrTbeh8jzpnCov3UKdIrmxR/QVNJMC3WkNQeTPed0KNxKkM/Q5C7lM5zqldO0KLrwUz9Ulaq3vMxcQA6G9ipbgHi2Gs9b+2KF5kequv0BNQ0WI/w2NMAj94VpNTJK9t0Mmwcr0xx+iQcQUVJyPvehej07jpUX0NRovBQZ/IRPTpKJZa56OZvfrRCmS2g1nkfo2eaTBvOJ95Gr8aQvZ0BTNPF1RGm+4jw85YnPFWC1NgXdtP4v8WnvPAdsLZdeSJmuzZdFvHpczmPbeNIVN4HV6yCryOg6ow3xCmt4AJmIN5OpVcTfE2Yo1httgKcqgwWyKC33gNWL+JJTwrTcOTTnT/9YWZcmI7vB6jV8zCnkyNjcOxB68KD7TdatYDGnyJp2cHDpm3SX8eCxIX99XIHZdKbWeMfgcbH5GBpycdhk3fyl4UIg3Jgel0fnZNPJik0yNX083/fsTSKm4flzdeBBZJVMawpnEU2Jl6uO/GScWSfzJnChZTRvHR0czl5mDY8arMXaSLz8HHeQ2f9E25n7+zcrGdIwBSfL3Qo8TppVz9yVgvS0STgvFuodhOe4YyvaBtuJc/DYHHYnGk1P2+zGT59mVszb6+ozZ9WGC0+eRfaZE9ONrtDOmlQb7mSz6YlGz+BAcf6MTR34dOhjS7zsE+b8VP+cKQvf/8mHKP2yrXU/QlNHzuHzNzO1Dxj9DE055S9cUquGO6+Wzuf73Vw13A+nEz9zEekkCu5ns3ke+VW4afHsl2zlmf3WXPEv2eKfpZJaN5sl/c9sP9bNdk3dbNfUzXZN3WzX1M12Td1s19TNdk3dbNfUzXZN/c9s/wA0J+PK0zve3QAAAABJRU5ErkJggg==",alt:"profile",className:"circle profile-picture"})},f=n(20),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.profile;return Object(c.jsxs)("div",{className:"sidebar bg-color-2 color-3 p-4 text-center",children:[Object(c.jsx)("span",{children:Object(c.jsx)(j,{src:e.pfp_src})}),Object(c.jsxs)("span",{children:[Object(c.jsx)("h1",{children:e.name}),Object(c.jsxs)("div",{children:[e.email&&Object(c.jsxs)("h6",{className:"text-white d-inline-block",children:[" ",e.email," "]}),e.email&&e.phone&&Object(c.jsx)("h6",{className:"text-white d-inline-block px-2",children:"\u2022"}),e.phone&&Object(c.jsxs)("h6",{className:"text-white d-inline-block",children:[" ",e.phone]})]})]}),e.resume&&Object(c.jsx)("span",{children:Object(c.jsxs)("a",{className:"suppressed-a d-block mt-3 sidebar-item",href:e.resume,target:"_blank",rel:"noreferrer",children:[Object(c.jsx)(f.a,{className:"d-inline-block icon-color-3 icon"}),"Resume"]})}),e.github&&Object(c.jsx)("span",{children:Object(c.jsxs)("a",{className:"suppressed-a d-block mt-3 sidebar-item",href:e.github,target:"_blank",rel:"noreferrer",children:[Object(c.jsx)(p.a,{className:"d-inline-block icon"}),"GitHub"]})}),e.linkedin&&Object(c.jsx)("span",{children:Object(c.jsxs)("a",{className:"suppressed-a d-block mt-3 sidebar-item",href:e.linkedin,target:"_blank",rel:"noreferrer",children:[Object(c.jsx)(p.b,{className:"d-inline-block icon"}),"LinkedIn"]})})]})}}]),n}(i.Component),x={name:"Gaurav Sharma",pfp_src:"https://www.dropbox.com/s/wdb6gbebgnonqhk/profile.PNG?raw=1",email:"g.sharma0909@gmail.com",phone:"+1 647-927-4338",github:"https://github.com/GauravS99",linkedin:"https://www.linkedin.com/in/gaurav-sharma-17b956163/",resume:"https://www.dropbox.com/s/5fkxcegatw2h563/gaurav_sharma_resume.pdf?dl=0"};var v=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{children:Object(c.jsx)(w,{profile:x})}),Object(c.jsx)("div",{className:"bg-color-3",children:Object(c.jsx)(g,{})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),k(console.log)}},[[18,1,2]]]);
//# sourceMappingURL=main.af25b559.chunk.js.map