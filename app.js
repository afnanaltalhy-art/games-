const students=['غلا','ابتهال','أمل','نهاد','أرياف','جنان'];
let scores=Object.fromEntries(students.map(n=>[n,0]));
const questions=[
{t:'اختيار من متعدد',q:'النقطة داخل الأرض التي تبدأ عندها حركة الصخور وتتحرر الطاقة تسمى:',o:['المركز السطحي','البؤرة','الصدع','الفوهة'],a:'البؤرة'},
{t:'صح أم خطأ',q:'المركز السطحي للزلزال يقع داخل الأرض.',o:['صح','خطأ'],a:'خطأ؛ البؤرة تقع داخل الأرض، والمركز السطحي فوقها على سطح الأرض.'},
{t:'من أنا؟',q:'أنا أسرع الموجات الزلزالية، وأستطيع الانتقال في المواد الصلبة والسائلة. من أنا؟',o:[],a:'الموجات الأولية P'},
{t:'اختيار من متعدد',q:'أي الموجات الزلزالية لا تنتقل في السوائل؟',o:['P','S','السطحية','جميعها'],a:'الموجات الثانوية S'},
{t:'تحدي ٣٠ ثانية',q:'اذكري ثلاثة مصطلحات مرتبطة بالزلازل واشرحي واحدًا منها.',o:[],a:'أمثلة: البؤرة، المركز السطحي، الصدع، الموجات الزلزالية.'},
{t:'صح أم خطأ',q:'الصهارة عندما تصل إلى سطح الأرض تسمى لابة.',o:['صح','خطأ'],a:'صح'},
{t:'من أنا؟',q:'أنا كسر في صخور القشرة الأرضية تتحرك الصخور على جانبيّ. من أنا؟',o:[],a:'الصدع'},
{t:'اختيار من متعدد',q:'أي مما يأتي يعد من نواتج الثوران البركاني؟',o:['اللابة','الغازات','الرماد البركاني','جميع ما سبق'],a:'جميع ما سبق'},
{t:'قرار النجاة',q:'بدأ زلزال وأنت داخل الفصل. ما التصرف الأنسب؟',o:['الوقوف قرب النافذة','الركض والتدافع','حماية الرأس والاحتماء واتباع تعليمات السلامة','استخدام المصعد'],a:'حماية الرأس والاحتماء واتباع تعليمات السلامة'},
{t:'تحدي ٣٠ ثانية',q:'قارني بسرعة بين الموجات P والموجات S بفرقين.',o:[],a:'P أسرع وتنتقل في الصلب والسائل؛ S أبطأ ولا تنتقل في السوائل.'},
{t:'اختيار من متعدد',q:'النقطة الواقعة على سطح الأرض مباشرة فوق بؤرة الزلزال تسمى:',o:['المركز السطحي','الفوهة','الصدع','الصهارة'],a:'المركز السطحي'},
{t:'من أنا؟',q:'أنا مادة صخرية منصهرة ما زلت تحت سطح الأرض. من أنا؟',o:[],a:'الصهارة'},
{t:'صح أم خطأ',q:'الموجات السطحية تنتقل على سطح الأرض وقد تسبب أضرارًا كبيرة.',o:['صح','خطأ'],a:'صح'},
{t:'تحدي سريع',q:'رتبي زمن الوصول: الموجات السطحية، S، P.',o:[],a:'P ثم S ثم الموجات السطحية'},
{t:'قرار النجاة',q:'بعد توقف الاهتزاز، ما الأفضل؟',o:['التدافع للخروج','اتباع خطة الإخلاء والابتعاد عن مصادر الخطر','العودة قرب النوافذ','تشغيل المصعد'],a:'اتباع خطة الإخلاء والابتعاد عن مصادر الخطر'},
{t:'اختيار من متعدد',q:'الفتحة في القشرة الأرضية التي تندفع منها الصهارة والغازات والمواد البركانية هي:',o:['الزلزال','البركان','البؤرة','الموجة'],a:'البركان'},
{t:'تحدي ٣٠ ثانية',q:'اذكري ثلاثة من نواتج الثوران البركاني.',o:[],a:'مثل: اللابة، الغازات، الرماد أو المواد الصلبة البركانية.'},
{t:'صح أم خطأ',q:'الصهارة واللابة مصطلحان لمادة منصهرة، لكن الاسم يتغير بحسب موقعها.',o:['صح','خطأ'],a:'صح؛ تحت السطح صهارة، وعلى السطح لابة.'}
];
const lanes=document.querySelector('#lanes'), scoresEl=document.querySelector('#scores'), ranking=document.querySelector('#ranking');
function girl(){return `<div class="girl"><i class="head"></i><i class="hair"></i><i class="shirt"></i><i class="skirt"></i></div>`}
function render(){lanes.innerHTML=students.map(n=>`<div class="lane"><div class="finish"></div><div class="runner" id="run-${n}">${girl()}<span class="namebadge">${n} • ${scores[n]}</span></div></div>`).join('');scoresEl.innerHTML=students.map(n=>`<div class="scoreRow"><div class="who"><span class="dot"></span>${n}</div><div class="scoreBtns"><button class="mini minus" onclick="add('${n}',-1)">−١</button><span class="scoreNum">${scores[n]}</span><button class="mini" onclick="add('${n}',1)">+١</button><button class="mini" onclick="add('${n}',2)">+٢</button></div></div>`).join('');
let sorted=[...students].sort((a,b)=>scores[b]-scores[a]);ranking.innerHTML=`<div class="ranking">${sorted.map((n,i)=>`<div class="rank"><span>${['🥇','🥈','🥉','⭐','⭐','⭐'][i]}</span><b>${n}</b><span>${scores[n]} نقطة</span></div>`).join('')}</div>`;requestAnimationFrame(()=>students.forEach(n=>{let el=document.getElementById('run-'+n);let pct=Math.min(Math.max(scores[n],0),15)/15;let travel=el.parentElement.clientWidth-el.offsetWidth-55;el.style.right=(12+pct*travel)+'px'}));localStorage.setItem('earthRaceScores',JSON.stringify(scores))}
window.add=function(n,v){scores[n]=Math.max(0,scores[n]+v);render()};
let qi=-1;function newQ(){let next;do{next=Math.floor(Math.random()*questions.length)}while(next===qi&&questions.length>1);qi=next;let x=questions[qi];type.textContent=x.t;question.textContent=x.q;options.innerHTML=x.o.map(o=>`<div class="option">${o}</div>`).join('');answer.textContent='الإجابة: '+x.a;answer.classList.add('hidden')}
newQ();document.querySelector('#newQ').onclick=newQ;document.querySelector('#showA').onclick=()=>answer.classList.toggle('hidden');
let interval;document.querySelector('#timerBtn').onclick=()=>{clearInterval(interval);let s=30;timer.textContent=s;interval=setInterval(()=>{s--;timer.textContent=s;if(s<=0){clearInterval(interval);timer.textContent='انتهى'}},1000)};
document.querySelector('#reset').onclick=()=>{if(confirm('هل تريدين إعادة جميع الدرجات إلى الصفر؟')){scores=Object.fromEntries(students.map(n=>[n,0]));render()}};
try{let saved=JSON.parse(localStorage.getItem('earthRaceScores'));if(saved) students.forEach(n=>scores[n]=Number(saved[n]||0))}catch(e){}render();window.addEventListener('resize',render);
