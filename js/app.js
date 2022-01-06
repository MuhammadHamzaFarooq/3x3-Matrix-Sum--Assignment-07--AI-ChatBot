console.log("Welcome in 3x3 Matrix Calculator");

let tabelContainer = document.getElementById("tableContainer");
let headingMatrixSum = document.getElementById("matrix-heading");

function MartixSum() {
  // ======================== Start Matrix One Code ===================================== //
  let _3x3_MatrixOne = new Array(3);
  for (let i = 0; i < _3x3_MatrixOne.length; i++) {
    _3x3_MatrixOne[i] = new Array(3);
  }

  for (let j = 0; j < _3x3_MatrixOne.length; j++) {
    for (let k = 0; k < _3x3_MatrixOne.length; k++) {
      _3x3_MatrixOne[j][k] = +prompt(
        `" This is 3x3  Matrix . Please Enter First Matrix Row ${j} and Coloumn ${k} ."`
      );
    }
  }
  console.log(_3x3_MatrixOne);
  // ======================== End Matrix One Code ===================================== //

  // ======================== Start Matrix Two Code ===================================== //
  let _3x3_MatrixTwo = new Array(3);
  for (let l = 0; l < _3x3_MatrixTwo.length; l++) {
    _3x3_MatrixTwo[l] = new Array(3);
  }
  for (let m = 0; m < _3x3_MatrixTwo.length; m++) {
    for (let n = 0; n < _3x3_MatrixTwo.length; n++) {
      _3x3_MatrixTwo[m][n] = +prompt(
        `" This is 3x3 Matrix . Please Enter Second Matrix Row ${m} and Coloumn ${n} ."`
      );
    }
  }
  console.log(_3x3_MatrixTwo);
  // ======================== End Matrix Two Code =====================================  //

  // ======================== Start Matrix Sum Code =====================================  //
  let _3x3_MatrixSum = new Array(3);
  for (let a = 0; a < _3x3_MatrixSum.length; a++) {
    _3x3_MatrixSum[a] = new Array(3);
  }
  for (let b = 0; b < _3x3_MatrixSum.length; b++) {
    for (let c = 0; c < _3x3_MatrixSum.length; c++) {
      _3x3_MatrixSum[b][c] = _3x3_MatrixOne[b][c] + _3x3_MatrixTwo[b][c];
    }

    headingMatrixSum.innerText = "Sum Of Matrix:";

    tabelContainer.innerHTML = `
  
  <tr>
              <td>${_3x3_MatrixSum[0][0]}</td>        
              <td>${_3x3_MatrixSum[0][1]}</td>
              <td>${_3x3_MatrixSum[0][2]}</td>         
       </tr>
  <tr>
              <td>${_3x3_MatrixSum[1][0]}</td>
              <td>${_3x3_MatrixSum[1][1]}</td>
              <td>${_3x3_MatrixSum[1][2]}</td>
       </tr>
          
  <tr>
              <td>${_3x3_MatrixSum[2][0]}</td>
              <td>${_3x3_MatrixSum[2][1]}</td>
              <td>${_3x3_MatrixSum[2][2]}</td>       
      </tr>  
                `;
  }
  console.log(_3x3_MatrixSum);
}
// ======================== End Matrix Sum Code =====================================  //