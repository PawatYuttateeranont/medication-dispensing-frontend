<template>
  <div id="medicine-page" class="container">
    <h3 class="text-left">Medicine Stock</h3>

    <div class="row">
      <div class="col-12 pull-right">
        <!--<button class="btn btn-info">Print Report</button>-->
        <input type="text" class="form-control" placeholder="Search" style="width: 200px; float: right;"/>
      </div>
    </div>

    <div class="text-center mt-3 mb-3">
      <table class="table center-align">
        <thead>
        <tr>
          <th>#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Tylenol tab 500 mg</td>
          <td>Paracetamol</td>
          <td>98 Tablet(s)</td>
          <td><button class="btn btn-outline-primary">Order</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Bisolvon tab 8 mg</td>
          <td>Bromhexine</td>
          <td>80 Tablet(s)</td>
          <td><button class="btn btn-outline-primary">Order</button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Bisolvon tab 8 mg</td>
          <td>Bromhexine</td>
          <td>80 Tablet(s)</td>
          <td><button class="btn btn-outline-primary">Order</button></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Chlorphen tab 4 mg</td>
          <td>Chlorpheniramine</td>
          <td>100 Tablet(s)</td>
          <td><button class="btn btn-outline-primary">Order</button></td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>PREVACID FDT tab 30 mg</td>
          <td>Lansoprazole</td>
          <td>100 Tablet(s)</td>
          <td><button class="btn btn-outline-primary">Order</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MedicinePage'
  }
</script>

<style>

</style>
