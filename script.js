var tl=gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    // markers:true,
    start:"0% 95%",
    end:"50% 60%",
    scrub:3
  }
});

tl.to("#fanta-can",{
  top:150+"%",
  opacity:1,
  height:65+"vh",
  left:25+"%"

},'orange');

tl.to("#orange-cut",{
  top:100+"%",
  opacity:1,
  // height:70+"vh",
  left:10+"%"

},'orange');

tl.to("#leaf1",{
  top:110+"%",
  rotate:"1200deg",
  opacity:1,
  // height:70+"vh",
  left:80+"%"

},'orange');

var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    // markers:true,
    start:"10% 95%",
    end:"40% 50%",
    scrub:3
  }
});

tl2.to("#fanta-can",{
  top:250+"%",
  opacity:1,
  height:50+"vh",
  left:50+"%",
  // scrub:3
},"orange2")

tl2.to("#orange-cut",{
  top:200+"%",
  opacity:1,
  // height:50+"vh",
  left:40+"%",
  // scrub:2
},'orange2')

tl2.from('#lemon-slice',{
  left:-30+"%",
  top:40+"%",
  opacity:1,
  rotate:'360deg'

},'orange2')

tl2.from('#apple-slice',{
  right:-30+"%",
  top:40+"%",
  opacity:1,
  rotate:'10deg'

},'orange2')

