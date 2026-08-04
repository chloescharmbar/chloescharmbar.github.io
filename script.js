const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('section,.feature-copy,.masonry figure').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
document.getElementById('booking-form').addEventListener('submit',e=>{
 e.preventDefault(); const d=new FormData(e.currentTarget);
 const subject=encodeURIComponent(`Website inquiry from ${d.get('name')}`);
 const body=encodeURIComponent(`New Chloe's Charm Bar event inquiry

Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}
Event date: ${d.get('date')||'Not selected'}
Estimated guests: ${d.get('guests')||'Not provided'}
Event type: ${d.get('type')}

Event details:
${d.get('message')||'No additional details provided.'}`);
 window.location.href=`mailto:chloecharmbar@gmail.com?subject=${subject}&body=${body}`;
});
