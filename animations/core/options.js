
function animation_options(svg, param, value) {
    var Cont={val:0} , NewVal = value ;

    switch (param) {
      case "pulse":
        return TweenMax.to(svg, 0.8, {
          scaleX: 1.05,
          scaleY: 1.15,
          ease: Elastic.easeOut,
          repeatDelay: 0.1
        });

      case "shake":
        return TweenLite.fromTo(svg, 1,{ 
            rotation: -10 
          },
          { 
            rotation: 0, 
            ease: Elastic.easeOut.config(2, 0.2) 
      });

      case "count":
        return TweenLite.to(Cont , 1, {
            val: NewVal, 
            roundProps: "val", 
            onUpdate: function(){
                document.getElementById("value").innerHTML= Cont.val
            }
        });
    }
  };