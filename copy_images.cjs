const fs = require('fs');

fs.copyFileSync(
  'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\cfe0ec56-5f25-44e0-9f51-fa3a91f6a5e4\\floating_leaf_sharp_1782149979755.png',
  'c:\\Users\\Administrator\\Desktop\\Rey\\Rey\\src\\assets\\leaf_sharp.png'
);
fs.copyFileSync(
  'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\cfe0ec56-5f25-44e0-9f51-fa3a91f6a5e4\\floating_leaf_blur_1782149989194.png',
  'c:\\Users\\Administrator\\Desktop\\Rey\\Rey\\src\\assets\\leaf_blur.png'
);
fs.copyFileSync(
  'C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\cfe0ec56-5f25-44e0-9f51-fa3a91f6a5e4\\floating_lemon_1782149997110.png',
  'c:\\Users\\Administrator\\Desktop\\Rey\\Rey\\src\\assets\\lemon.png'
);

console.log('Copied successfully!');
