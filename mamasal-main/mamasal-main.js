gsap.to(".scroll_theme_malumo", {
    //アニメーションしたい要素を指定
    y: 370, //下に500px動かす
    rotation: 360, //回転。rotationXとrotationYも指定できる
    duration: 2,
    scrollTrigger: {
        trigger: ".scroll_theme", //アニメーションが始まるトリガーとなる要素
        start: "top+=300 bottom", //アニメーションが始まる位置
        end: "bottom center",
        //   markers: true,
        scrub: true,
    },
});




gsap.from(".einrogard_animation", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".scrolle_theme_title", // トリガーとなる要素
        start: "top+=300 bottom", // アニメーションが始まる位置
        end: "bottom center",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".einrogard_animation", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".scrolle_theme_title", // トリガーとなる要素
        start: "top+=300 bottom", // アニメーションが始まる位置
        end: "bottom center",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

// main-animation
gsap.from(".main_p2", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".main_p2_scroll", // トリガーとなる要素
        start: "top center+=230", // アニメーションが始まる位置
        end: "bottom center-=50",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".main_p2", {
    opacity: 1, // フェードイン
    x: 100, // 上に移動
    duration: 5, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".main_p2_scroll", // トリガーとなる要素
        start: "top center+=230", // アニメーションが始まる位置
        end: "bottom center-=50",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
//   CHARACTER
gsap.to(".character_scroll_theme_malumo", {
    //アニメーションしたい要素を指定
    y: 370, //下に500px動かす
    rotation: 360, //回転。rotationXとrotationYも指定できる
    duration: 2,
    scrollTrigger: {
        trigger: ".character_scroll_theme", //アニメーションが始まるトリガーとなる要素
        start: "top+=300 bottom", //アニメーションが始まる位置
        end: "bottom center",
        //   markers: true,
        scrub: true,
    },
});

gsap.from(".character_animation", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".character_scrolle_theme_title", // トリガーとなる要素
        start: "top+=300 bottom", // アニメーションが始まる位置
        end: "bottom center",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".character_animation", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".character_scrolle_theme_title", // トリガーとなる要素
        start: "top+=300 bottom", // アニメーションが始まる位置
        end: "bottom center",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   magic
gsap.to(".magic_scroll_theme_malumo", {
    //アニメーションしたい要素を指定
    y: 370, //下に500px動かす
    rotation: 360, //回転。rotationXとrotationYも指定できる
    duration: 2,
    scrollTrigger: {
        trigger: ".magic_scroll_theme", //アニメーションが始まるトリガーとなる要素
        start: "top+=300 bottom", //アニメーションが始まる位置
        end: "bottom center",
        //   markers: true,
        scrub: true,
    },
});

gsap.from(".magic_animation", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".magic_scrolle_theme_title", // トリガーとなる要素
        start: "top+=300 bottom", // アニメーションが始まる位置
        end: "bottom center",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".magic_animation", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".magic_scrolle_theme_title", // トリガーとなる要素
        start: "top+=300 bottom", // アニメーションが始まる位置
        end: "bottom center",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   -yokoni scroll-
gsap.from(".yokoslide", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".yokoslide", // トリガーとなる要素
        start: "top center+=230", // アニメーションが始まる位置
        end: "bottom center+=20",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".yokoslide", {
    opacity: 1, // フェードイン
    x: 50, // 上に移動
    duration: 5, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".yokoslide", // トリガーとなる要素
        start: "top center+=230", // アニメーションが始まる位置
        end: "bottom center+=20",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   huwato-arawareru-animation-einrogard

gsap.from(".huwato-einrogard-video", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".huwato-einrogard-video", // トリガーとなる要素
        start: "top center+=230", // アニメーションが始まる位置
        end: "center center+=20",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".huwato-einrogard-video", {
    opacity: 1, // フェードイン
    y: -50, // 上に移動
    duration: 5, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-einrogard-video", // トリガーとなる要素
        start: "top center+=230", // アニメーションが始まる位置
        end: "center center+=20",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});


gsap.from(".huwato", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".huwato", // トリガーとなる要素
        start: "top center+=230", // アニメーションが始まる位置
        end: "bottom center+=20",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
        stagger: 0.02,
    },
});
gsap.to(".huwato", {
    opacity: 1, // フェードイン
    y: -50, // 上に移動
    duration: 5, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".huwato", // トリガーとなる要素
        start: "top center+=230", // アニメーションが始まる位置
        end: "bottom center+=20",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
        stagger: 0.02,
    },
});

gsap.from(".huwato-character1", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".huwato-character1", // トリガーとなる要素
        start: "center bottom", // アニメーションが始まる位置
        end: "center center+=170",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".huwato-character1", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character1", // トリガーとなる要素
        start: "center bottom", // アニメーションが始まる位置
        end: "center center+=170",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

gsap.from(".huwato-character2", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".huwato-character2", // トリガーとなる要素
        start: "top-=60 bottom", // アニメーションが始まる位置
        end: "top center+=170",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".huwato-character2", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character2", // トリガーとなる要素
        start: "top-=60 bottom", // アニメーションが始まる位置
        end: "top center+=170",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

// 3
gsap.from(".huwato-character3", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".huwato-character3", // トリガーとなる要素
        start: "top-=20 bottom", // アニメーションが始まる位置
        end: "top+=40 center+=170",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".huwato-character3", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character3", // トリガーとなる要素
        start: "top-=20 bottom", // アニメーションが始まる位置
        end: "top+=40 center+=170",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

// 4
gsap.from(".huwato-character4", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".huwato-character4", // トリガーとなる要素
        start: "top+=20 bottom", // アニメーションが始まる位置
        end: "top+=80 center+=170",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".huwato-character4", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character4", // トリガーとなる要素
        start: "top+=20 bottom", // アニメーションが始まる位置
        end: "top+=80 center+=170",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

// 5
gsap.from(".huwato-character5", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".huwato-character5", // トリガーとなる要素
        start: "top+=60 bottom", // アニメーションが始まる位置
        end: "top+=120 center+=170",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".huwato-character5", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".huwato-character5", // トリガーとなる要素
        start: "top+=60 bottom", // アニメーションが始まる位置
        end: "top+=120 center+=170",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});






//   sns scroll waku title
gsap.to(".bou", {
    //アニメーションしたい要素を指定
    y: -250, //下に500px動かす
    duration: 2,
    scrollTrigger: {
        trigger: ".bou", //アニメーションが始まるトリガーとなる要素
        start: "top top+=150", //アニメーションが始まる位置
        end: "bottom-=200 top",
        //   markers: true,
        scrub: true,
    },
});




gsap.to(".sns_scroll_theme_malumo", {
    //アニメーションしたい要素を指定
    y: 542, //下に500px動かす
    duration: 2,
    scrollTrigger: {
        trigger: ".sns_scroll_theme", //アニメーションが始まるトリガーとなる要素
        start: "top+=300 bottom", //アニメーションが始まる位置
        end: "bottom center-=150",
        //   markers: true,
        scrub: true,
    },
});

gsap.to(".sns_scroll_theme_malumo2", {
    //アニメーションしたい要素を指定
    y: 472, //下に500px動かす
    duration: 2,
    scrollTrigger: {
        trigger: ".sns_scroll_theme", //アニメーションが始まるトリガーとなる要素
        start: "top+=300 bottom", //アニメーションが始まる位置
        end: "bottom center-=150",
        //   markers: true,
        scrub: true,
    },
});

gsap.from(".sns_animation", {
    opacity: 0, // 初期状態を透明に設定
    y: 100, // 上に移動
    scrollTrigger: {
        trigger: ".sns_scrolle_theme_title", // トリガーとなる要素
        start: "top+=300 bottom", // アニメーションが始まる位置
        end: "bottom center",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".sns_animation", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".sns_scrolle_theme_title", // トリガーとなる要素
        start: "top+=300 bottom", // アニメーションが始まる位置
        end: "bottom center",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});








// magic
//   1
gsap.from(".magic1", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".magic1", // トリガーとなる要素
        start: "top bottom", // アニメーションが始まる位置
        end: "top center+=100",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".magic1", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower4.out", // イージング
    scrollTrigger: {
        trigger: ".magic1", // トリガーとなる要素
        start: "top bottom", // アニメーションが始まる位置
        end: "top center+=100",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   2
gsap.from(".magic2", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".magic2", // トリガーとなる要素
        start: "top+=40 bottom", // アニメーションが始まる位置
        end: "top+=40 center+=100",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".magic2", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower3.out", // イージング
    scrollTrigger: {
        trigger: ".magic2", // トリガーとなる要素
        start: "top+=40 bottom", // アニメーションが始まる位置
        end: "top+=40 center+=100",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   3
gsap.from(".magic3", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".magic3", // トリガーとなる要素
        start: "top+=80 bottom", // アニメーションが始まる位置
        end: "top+=80 center+=100",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".magic3", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".magic3", // トリガーとなる要素
        start: "top+=80 bottom", // アニメーションが始まる位置
        end: "top+=80 center+=100",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   4
gsap.from(".magic4", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".magic4", // トリガーとなる要素
        start: "top+=120 bottom", // アニメーションが始まる位置
        end: "top+=120 center+=100",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".magic4", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".magic4", // トリガーとなる要素
        start: "top+=120 bottom", // アニメーションが始まる位置
        end: "top+=120 center+=100",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   5
gsap.from(".magic5", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".magic5", // トリガーとなる要素
        start: "top+=120 bottom", // アニメーションが始まる位置
        end: "top+=120 center+=240",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".magic5", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower1.out", // イージング
    scrollTrigger: {
        trigger: ".magic5", // トリガーとなる要素
        start: "top+=120 bottom", // アニメーションが始まる位置
        end: "top+=120 center+=240",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   6
gsap.from(".magic6", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".magic6", // トリガーとなる要素
        start: "top+=80 bottom", // アニメーションが始まる位置
        end: "top+=80 center+=190",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".magic6", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower2.out", // イージング
    scrollTrigger: {
        trigger: ".magic6", // トリガーとなる要素
        start: "top+=80 bottom", // アニメーションが始まる位置
        end: "top+=80 center+=190",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   7
gsap.from(".magic7", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".magic7", // トリガーとなる要素
        start: "top+=40 bottom", // アニメーションが始まる位置
        end: "top+=40 center+=120",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".magic7", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower3.out", // イージング
    scrollTrigger: {
        trigger: ".magic7", // トリガーとなる要素
        start: "top+=40 bottom", // アニメーションが始まる位置
        end: "top+=40 center+=120",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

//   8
gsap.from(".magic8", {
    opacity: 0, // 初期状態を透明に設定
    scrollTrigger: {
        trigger: ".magic8", // トリガーとなる要素
        start: "top bottom", // アニメーションが始まる位置
        end: "top center+=100",
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});
gsap.to(".magic8", {
    opacity: 1, // フェードイン
    y: -100, // 上に移動
    duration: 10, // アニメーションの持続時間
    ease: "ppower4.out", // イージング
    scrollTrigger: {
        trigger: ".magic8", // トリガーとなる要素
        start: "top bottom", // アニメーションが始まる位置
        end: "top center+=100",
        //   markers: true, // マーカーを表示（デバッグ用）
        scrub: true, // スクロールに合わせてアニメーションを進行
    },
});

