kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
});

loadRoot();
loadSprite("link-going-left", "https://i.imgur.com/eiY5zyX.png");
loadSprite("link-going-left", "https://i.imgur.com/yZIb8O2.png");

scene("game", () => {});

start("game");
