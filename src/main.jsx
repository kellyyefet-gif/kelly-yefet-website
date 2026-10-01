import React from 'react';import{createRoot}from'react-dom/client';import{ArrowUpRight}from'lucide-react';import'./style.css';

const Work=({n,kicker,title,body,stat})=><article className="work"><div className="num">{n}</div><div><p className="eyebrow">{kicker}</p><h3>{title}</h3><p>{body}</p>{stat&&<p className="stat">{stat}</p>}</div><ArrowUpRight size={25}/></article>;

function App(){return <main>
<nav><a className="brand" href="#">KELLY YEFET</a><div><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Work with me</a></div></nav>

<header className="hero"><p className="eyebrow">STRATEGY · GROWTH · VENTURE BUILDING</p><h1>I turn ideas into <em>businesses</em><br/>and businesses into <em>growth.</em></h1><div className="hero-bottom"><p>I work alongside founders and leadership teams to figure out what's next — from validating an opportunity and building the strategy to launching it, growing it and getting the work done.</p><a className="circle" href="#work">↓</a></div></header>

<section className="proof"><span>BUILT AT</span><strong>General Mills</strong><strong>Shopify</strong><strong>Moderna</strong><span>BUILDING NOW</span><strong>LOVEDFULLY</strong><strong>ChaiTech</strong></section>

<section className="manifesto"><p className="eyebrow">HOW I WORK</p><h2>You don't need more ideas.<br/><em>You need clarity on what to do next.</em></h2><p className="lead">I come in when there's a big opportunity on the table but no obvious path from idea to execution. I help find the signal, build the plan, and stay close enough to the work to make sure it actually happens.</p><div className="pillars"><div><b>01</b><h4>Find the opportunity</h4><p>Customer, market, positioning and the assumptions that matter.</p></div><div><b>02</b><h4>Build the plan</h4><p>GTM, priorities, channels, resources and a roadmap people can execute.</p></div><div><b>03</b><h4>Prove it</h4><p>Validation, experiments and evidence before expensive bets.</p></div><div><b>04</b><h4>Make it happen</h4><p>Cross-functional leadership from strategy through launch and iteration.</p></div></div></section>

<section id="work" className="selected"><p className="eyebrow">SELECTED WORK</p><h2>I've built at, built for,<br/>and <em>built my own.</em></h2>
<Work n="01" kicker="FOUNDER · CONSUMER" title="LOVEDFULLY by Nurture Neuroscience" body="Building a science-backed early childhood brand from product and positioning to Amazon, DTC and national retail." stat="FROM SCIENCE → SHELF"/>
<Work n="02" kicker="VENTURE BUILDING · ECOSYSTEM" title="ChaiTech" body="Helping turn an ambitious accelerator into an operating program — across founder experience, growth, partnerships, systems and execution." stat="200+ FOUNDERS SUPPORTED"/>
<Work n="03" kicker="FRACTIONAL STRATEGY · GTM" title="Salute Club Canada" body="Turning an opportunity into a go-to-market plan: defining what needs to be true, validating the audience and offer, and building the path to launch." stat="STRATEGY → VALIDATION → LAUNCH"/>
</section>

<section id="about" className="about"><div><p className="eyebrow">ABOUT KELLY</p><h2>Operator first.<br/><em>Advisor second.</em></h2></div><div><p className="lead">I've spent my career inside businesses at very different stages — from global consumer brands and high-growth tech to startups and companies of my own.</p><p>That range changed how I work. I care less about producing the perfect strategy deck and more about answering the questions that actually move a business forward: What are we trying to prove? Where is the opportunity? What matters now? Who owns it? And how do we get it into market?</p><p>Today, I build businesses of my own and selectively work alongside founders and leadership teams on the ones I find interesting.</p></div></section>

<section id="contact" className="contact"><p className="eyebrow">WORK WITH ME</p><h2>Working on something<br/><em>that could be big?</em></h2><p>I take on a small number of fractional and strategic engagements. If there's an important opportunity on the table and the path isn't obvious yet, I'd like to hear about it.</p><a href="mailto:kelly@kellyyefet.com">Tell me what you're working on <ArrowUpRight size={20}/></a></section>
<footer><b>KELLY YEFET</b><span>Strategy · Growth · Venture Building</span><span>Toronto, Canada</span></footer>
</main>}createRoot(document.getElementById('root')).render(<App/>);