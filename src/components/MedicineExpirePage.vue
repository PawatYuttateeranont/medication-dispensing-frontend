<template>
  <div id="medicine-expire-page" class="container">
    <h3 class="text-left">Expired Medicine Report</h3>
    <h6 class="text-left">Return Medicine</h6>

    <div class="row">
      <div class="col-12 text-right">
        <button class="btn btn-info">Print Report</button>
      </div>
    </div>

    <div class="text-center mt-3 mb-3">
      <table class="table center-align">
        <thead>
        <tr>
          <th>#</th>
          <th scope="col">Name</th>
          <th scope="col">Lot</th>
          <th scope="col">Expiration Date</th>
          <th scope="col">Amount</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Tylenol tab 500 mg</td>
          <td>1</td>
          <td>01/05/2018</td>
          <td>8 Tablet(s)</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bisolvon tab 8 mg</td>
          <td>1</td>
          <td>01/06/2018</td>
          <td>10 Tablet(s)</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MedicineExpirePage'
  }
</script>

<style>

</style>
