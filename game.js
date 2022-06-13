kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
});

loadRoot("https://i.imgur.com/");
loadSprite("link-going-left", "eiY5zyX.png");
loadSprite("link-going-right", "yZIb8O2.png");

scene("game", () => {});

start("game");
