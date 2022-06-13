kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
});

loadRoot("https://i.imgur.com/");
loadSprite("link-going-left", "eiY5zyX.png");
loadSprite("link-going-right", "yZIb8O2.png");
loadSprite("link-going-down", "tVtlP6y.png");
loadSprite("link-going-up", "UkV0we0.png");
loadSprite("left-wall", "rfDoaa1.png");
loadSprite("top-wall", "QA257Bj.png");
loadSprite("bottom-wall", "vWJWmvb.png");
loadSprite("right-wall", "SmHhgUn.png");
loadSprite("bottom-left-wall", "awnTfNC.png");
loadSprite("bottom-right-wall", "84oyTFy.png");
loadSprite("top-left-wall", "xlpUxIm.png");
loadSprite("top-right-wall", "z0OmBd1.png");
loadSprite("top-door", "U9nre4n.png");
loadSprite("fire-pot", "I7xSp7w.png");
loadSprite("left-door", "okdJNls.png");
loadSprite("lanterns", "wiSiY09.png");
loadSprite("slicer", "");
loadSprite("skeletor", "");
loadSprite("kaboom", "");
loadSprite("stairs", "");
loadSprite("bg", "");

scene("game", () => {});

start("game");
