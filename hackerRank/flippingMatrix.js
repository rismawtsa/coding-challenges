function flippingMatrix(matrix) {
  const n = matrix.length / 2;
  let sum = 0;

  /* Each cell in the upper left quadrant has 4 possible "mirrors"
   * No matter how many times you flip a row or column, every cell in the matrix
   * will have 3 other corresponding "mirror" cells.
   * One commenter put as though you have a piece of paper folded into
   * four quadrants. Suppose your draw your matrix upon the paper;
   * the cells that line up when it is folded into four are your mirrors.
   *
   * To find the equation which will give you the mirrors for each cell, one can
   * simply brute force it and figure it out from there
   *
   * The following are the mirror coordinates for each cell in the upper left quadrant
   * when you have n = 2 aka 4x4 matrix. I simply wrote them out by hand but you can
   * see a pattern emerge. from this pattern, you can take the values of i,j and n
   * to figure out how to create a universal formula to find the mirror cells for each
   * coordinate
   * [00, 03, 30 33]
   * [01, 02, 31, 32]
   * [10, 13, 20, 23]
   * [11, 12, 21, 22]
   *
   * from here it's a matter of basic algebra - and thinking about how we can use our given
   * information (i,j,n) to find out the location of our mirror cells.
   *
   *  for the first looo: i = 0,j = 0, n = 2
   * [i,j, i,n2-1 - j,   n2-1 - i,j, n2-1 - i,n2-1 - j ]
   * for the second loop: i = 0, j = 1,  n = 2. The same formula applies. Checking against
   * each cell in the upper left quadrant shows that we have a universal formula.
   */
  function getMirrors(i, j) {
    return [
      matrix[i][j],
      matrix[i][n * 2 - 1 - j],
      matrix[n * 2 - 1 - i][j],
      matrix[n * 2 - 1 - i][n * 2 - 1 - j],
    ];
  }

  /*
   * from here it's just a matter of looping through the first quadrant. For each cell
   * in the first quadrant, we find the maximum possible value of all the mirror cells
   * We then add that value to the total sum
   */
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += Math.max(...getMirrors(i, j));
    }
  }

  return sum;
}
