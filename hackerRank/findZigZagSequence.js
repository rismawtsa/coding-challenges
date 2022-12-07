function findZigZagSequence(input) {
  console.log({ input });
  const [t, n, a] = input.split("\n");
  const arr = a.split(" ").map((val) => Number(val));

  const k = (arr.length + 1) / 2;
  console.log({ arr });
}

findZigZagSequence(`1
7
1 2 3 4 5 6 7
`);

// void findZigZagSequence(vector < int > a, int n){
//     sort(a.begin(), a.end());
//     int mid = (n - 1)/2;
//     swap(a[mid], a[n-1]);

//     int st = mid + 1;
//     int ed = n - 2;
//     while(st <= ed){
//         swap(a[st], a[ed]);
//         st = st + 1;
//         ed = ed - 1;
//     }
//     for(int i = 0; i < n; i++){
//         if(i > 0) cout << " ";
//         cout << a[i];
//     }
//     cout << endl;
// }
