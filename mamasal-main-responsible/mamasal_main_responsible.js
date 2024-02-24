
// up icon
document.getElementById("topButton").addEventListener("click", function(event) {
    event.preventDefault();
    
    // 画像にrotateクラスを追加して回転アニメーションを開始
    document.getElementById("up-icon").classList.add("rotate");
    
    // スクロール処理
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    // スクロールが完了したら回転アニメーションを停止する
    setTimeout(function() {
      document.getElementById("up-icon").classList.remove("rotate");
    }, 3000);
  });



// malumo no idou
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".malumo").forEach((target) => {

    gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: "top center", //アニメーションが始まる位置
            end: "bottom center-=250",
            toggleActions: "play none none reverse",
            // markers: true,
            scrub: true,
        }
    })
    .fromTo(target, {
        y: 81, // yの初期位置（必要に応じて調整）
    }, {
        y: 268,
        rotate: 360,
    });

});

// bou no idou
gsap.utils.toArray(".bou").forEach((target) => {

    gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: "center center", //アニメーションが始まる位置
            end: "bottom-=200 top",
            toggleActions: "play none none reverse",
            //   markers: true,
            scrub: true,
        }
    })
        .to(target, {
            y: -250,
        })

});

// title no idou
gsap.utils.toArray(".title").forEach((target) => {

    gsap.timeline({
        scrollTrigger: {
            trigger: target,
            start: "top center+=80",
            end: "center center+=80",
            toggleActions: "play none none reverse",
            // markers: true,
            scrub: true,
        }
    })
    .fromTo(target, {
        opacity: 0, // 最初は透明
        y: 0, // yの初期位置（必要に応じて調整）
    }, {
        y: -91,
        opacity: 1, // フェードイン効果
        duration: 1, // アニメーションの速度を設定（必要に応じて調整）
    });
});




// main_p2_animation
gsap.from(".main_p2", {
    opacity: 0, // 初期状態を透明に設定
    x: -50,
});
gsap.to(".main_p2", {
    opacity: 1, // フェードイン
    x: 45, // migiに移動
    duration: 5, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".main_p2_scroll", // トリガーとなる要素
        start: "center center+=300", // アニメーションが始まる位置
        end: "bottom center+=180",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});


// ホバーして回る
// ホバー要素
const hoverElement = document.querySelector('.einrogard_logo');
// 回転対象要素
const rotatingElement2 = document.querySelector('.einrogard_logo2');
const rotatingElement3 = document.querySelector('.einrogard_logo3');

let hoverTimeline2, hoverTimeline3;

hoverTimeline2 = gsap.to(rotatingElement2, { rotation: -360, duration: 6, repeat: -1, ease: 'linear', paused: true });
hoverTimeline3 = gsap.to(rotatingElement3, { rotation: 360, duration: 6, repeat: -1, ease: 'linear', paused: true });

hoverElement.addEventListener('mouseover', () => {
    hoverTimeline2.play();
    hoverTimeline3.play();
});

hoverElement.addEventListener('mouseout', () => {
    // 逆再生の速度を遅くするためにキーフレームを調整
    hoverTimeline2.reverse();
    hoverTimeline3.reverse();
});

//   -yokoni scroll-
gsap.from(".yokoslide", {
    opacity: 0, // 初期状態を透明に設定
    x: -50,
});
gsap.to(".yokoslide", {
    opacity: 1, // フェードイン
    x: 0, // 上に移動
    duration: 5, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".yokoslide", // トリガーとなる要素
        start: "center center+=250", // アニメーションが始まる位置
        end: "bottom center+=150",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   huwato-arawareru-animation-einrogard
gsap.from(".huwato-einrogard-video", {
    opacity: 0, // 初期状態を透明に設定
    y: 50,
});
gsap.to(".huwato-einrogard-video", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 5, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-einrogard-video", // トリガーとなる要素
        start: "center center+=310", // アニメーションが始まる位置
        end: "center center+=80",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

gsap.from(".huwato", {
    opacity: 0, // 初期状態を透明に設定
    y: 100,
});
gsap.to(".huwato", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 5, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".huwato", // トリガーとなる要素
        start: "top bottom", // アニメーションが始まる位置
        end: "center center+=150",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
        stagger: 0.02,
    },
});


// character huwato
gsap.from(".huwato-character1", {
    y:10,
    opacity: 0, // 初期状態を透明に設定
});
gsap.to(".huwato-character1", {
    opacity: 1, // フェードイン
    y: -80, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character1", // トリガーとなる要素
        start: "center center+=240", // アニメーションが始まる位置
        end: "bottom center+=170",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

gsap.from(".huwato-character2", {
    opacity: 0, // 初期状態を透明に設定
});
gsap.to(".huwato-character2", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character2", // トリガーとなる要素
        start: "top-=60 center+=280", // アニメーションが始まる位置
        end: "top center+=240",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

// 3
gsap.from(".huwato-character3", {
    opacity: 0, // 初期状態を透明に設定
});
gsap.to(".huwato-character3", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character3", // トリガーとなる要素
        start: "top-=20 center+=280", // アニメーションが始まる位置
        end: "top+=40 center+=240",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

// 4
gsap.from(".huwato-character4", {
    opacity: 0, // 初期状態を透明に設定
});
gsap.to(".huwato-character4", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character4", // トリガーとなる要素
        start: "top+=20 center+=280", // アニメーションが始まる位置
        end: "top+=80 center+=240",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

// 5
gsap.from(".huwato-character5", {
    opacity: 0, // 初期状態を透明に設定
});
gsap.to(".huwato-character5", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character5", // トリガーとなる要素
        start: "top+=60 center+=280", // アニメーションが始まる位置
        end: "top+=120 center+=240",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});





if (window.innerWidth >= 768) {
// magic_icon no idou
//   1
gsap.from(".magic1", {
    opacity: 0, 
    y:150,
});
gsap.to(".magic1", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower4.out", // イージング
    scrollTrigger: {
        trigger: ".magic1", // トリガーとなる要素
        start: "top center+=240", // アニメーションが始まる位置
        end: "top center-=10",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   2
gsap.from(".magic2", {
    opacity: 0, 
    y:150,
});
gsap.to(".magic2", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower3.out", // イージング
    scrollTrigger: {
        trigger: ".magic2", // トリガーとなる要素
        start: "top+=40 center+=240", // アニメーションが始まる位置
        end: "top+=40 center-=10",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   3
gsap.from(".magic3", {
    opacity: 0, 
    y:150,
});
gsap.to(".magic3", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".magic3", // トリガーとなる要素
        start: "top+=80 center+=240", // アニメーションが始まる位置
        end: "top+=80 center-=10",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   4
gsap.from(".magic4", {
    opacity: 0,     
    y:150,
});
gsap.to(".magic4", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".magic4", // トリガーとなる要素
        start: "top+=120 center+=240", // アニメーションが始まる位置
        end: "top+=120 center-=10",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   5
gsap.from(".magic5", {
    opacity: 0,    
    y:150,
});
gsap.to(".magic5", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".magic5", // トリガーとなる要素
        start: "top+=120 bottom+=130", // アニメーションが始まる位置
        end: "top+=120 bottom-=30",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   6
gsap.from(".magic6", {
    opacity: 0, 
    y:150,
});
gsap.to(".magic6", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".magic6", // トリガーとなる要素
        start: "top+=80 bottom+=130", // アニメーションが始まる位置
        end: "top+=80 bottom-=30",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   7
gsap.from(".magic7", {
    opacity: 0, 
    y:150,
});
gsap.to(".magic7", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower3.out", // イージング
    scrollTrigger: {
        trigger: ".magic7", // トリガーとなる要素
        start: "top+=40 bottom+=130", // アニメーションが始まる位置
        end: "top+=40 bottom-=30",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   8
gsap.from(".magic8", {
    opacity: 0, 
    y:80,
});
gsap.to(".magic8", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower3.in", // イージング
    scrollTrigger: {
        trigger: ".magic8", // トリガーとなる要素
        start: "top bottom", // アニメーションが始まる位置
        end: "top bottom-=200",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

gsap.from(".magic_name", {
    opacity: 0, 
    y:150,
});
gsap.to(".magic_name", {
    opacity: 1, // フェードイン
    y: 0, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower4.out", // イージング
    scrollTrigger: {
        trigger: ".magic8", // トリガーとなる要素
        start: "top-=380 center+=100", // アニメーションが始まる位置
        end: "top bottom",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

// SNS bou and slide
gsap.from(".malumo1", {
    y: 0, 
});
gsap.to(".malumo1", {
    y: 660, 
    rotate: 360,
    scrollTrigger: {
        trigger: ".malumo1", 
        start: "top center", 
        end: "bottom+=200 top",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, 
    },
});

gsap.from(".malumo4", {
    y: 0, 
});
gsap.to(".malumo4", {
    y: 660, 
    rotate: 360,
    scrollTrigger: {
        trigger: ".malumo4", 
        start: "top center", 
        end: "bottom+=200 top",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, 
    },
});

gsap.from(".malumo2", {
    y: 0, 
});
gsap.to(".malumo2", {
    y: 604, 
    rotate: 360,
    scrollTrigger: {
        trigger: ".malumo2", 
        start: "top center", 
        end: "bottom+=200 top",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, 
    },
});

gsap.from(".malumo3", {
    y: 0, 
});
gsap.to(".malumo3", {
    y: 604, 
    rotate: 360,
    scrollTrigger: {
        trigger: ".malumo3", 
        start: "top center", 
        end: "bottom+=200 top",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, 
    },
});

gsap.from(".sns_hobber", {
    opacity: 0, 
    y:80,
});
gsap.to(".sns_hobber", {
    opacity: 1, // フェードイン
    y: -10, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower3.in", // イージング
    scrollTrigger: {
        trigger: ".sns_hobber", // トリガーとなる要素
        start: "top bottom", // アニメーションが始まる位置
        end: "top center+=100",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

} else {
    // スマートフォン用のアニメーション
    gsap.from(".m1", {
        x: 20,
        opacity: 0,
    });
    gsap.to(".m1", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".m1",
            start: "top center-=60",
            end: "top center-=90",
            // markers: true,  
            scrub: true,           
        },
    });

    gsap.from(".m2", {
        x: 20,
        opacity: 0,
    });
    gsap.to(".m2", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".m2",
            start: "top+=10 center+=70",
            end: "top+=10 center+=40",
            // markers: true,  
            scrub: true,           
        },
    });

    gsap.from(".m3", {
        x: 20,
        opacity: 0,
    });
    gsap.to(".m3", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".m3",
            start: "top+=5 center+=110",
            end: "top+=5 center+=80",
            // markers: true,  
            scrub: true,           
        },
    });

    gsap.from(".m4", {
        x: 20,
        opacity: 0,
    });
    gsap.to(".m4", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".m4",
            start: "center center+=160",
            end: "center center+=130",
            // markers: true,  
            scrub: true,           
        },
    });

    gsap.from(".m5", {
        x: -20,
        opacity: 0,
    });
    gsap.to(".m5", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".m5",
            start: "top center",
            end: "top center-=30",
            // markers: true,  
            scrub: true,           
        },
    });

    gsap.from(".m6", {
        x: -20,
        opacity: 0,
    });
    gsap.to(".m6", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".m6",
            start: "top center+=70",
            end: "top center+=40",
            // markers: true,  
            scrub: true,           
        },
    });

    gsap.from(".m7", {
        x: -20,
        opacity: 0,
    });
    gsap.to(".m7", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".m7",
            start: "top center+=120",
            end: "top center+=90",
            // markers: true,  
            scrub: true,           
        },
    });

    gsap.from(".m8", {
        x: -20,
        opacity: 0,
    });
    gsap.to(".m8", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".m8",
            start: "top center-=60",
            end: "top center-=90",
            // markers: true,  
            scrub: true,           
        },
    });

gsap.from(".malumo_magic_iphone", {
    y: 0, 
});
gsap.to(".malumo_magic_iphone", {
    y: 1042, 
    scrollTrigger: {
        trigger: ".malumo_magic_iphone", 
        start: "top center", 
        end: "bottom+=600 center-=400",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, 
    },
});

gsap.from(".sns_hobber", {
    opacity: 0, 
    y:80,
});
gsap.to(".sns_hobber", {
    opacity: 1, // フェードイン
    y: -10, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower3.in", // イージング
    scrollTrigger: {
        trigger: ".sns_hobber", // トリガーとなる要素
        start: "top-=400 center+=100", // アニメーションが始まる位置
        end: "top-=400 center-=100",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});


}