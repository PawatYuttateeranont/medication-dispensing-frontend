<template>
  <div id="medicine-expire-page" class="container">
    <h3 class="text-left">Medicine Expire Report</h3>
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
          <th scope="col">Expire Date</th>
          <th scope="col">Amount</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Aspirin</td>
          <td>1</td>
          <td>01/01/2020</td>
          <td>98</td>
          <td><button class="btn btn-outline-primary">Order</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mendilex</td>
          <td>1</td>
          <td>01/06/2020</td>
          <td>80</td>
          <td><button class="btn btn-outline-primary">Order</button></td>
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
