const sum = require('./index');

// describe()
// 說明單元測試，類似群組的概念，將多個 test 包在一起，讓程式看起來更有結構性。
// describe('測試 sum function', function(){ test… })

// describe('僱員的行為測試', () => {
//     test('點餐內容與顧客需求相符', () => {});
//     test('結帳金額正確', () => {});
//     test('找零的金額正確', () => {});
// });

// sum(1,2);

// test()
// 定義一個單元測試
test('a=1, b=2 加起來等於 3', () => {
    expect(sum(1,2)).toBe(3);
});

