<template>
  <div id="prescription-page" class="container">
    <h3 class="text-left">Prescription</h3>

    <div class="text-center mt-3 mb-3">
      <table class="table center-align">
        <thead>
        <tr>
          <th scope="col">Prescription ID</th>
          <th scope="col">Doctor</th>
          <th scope="col">Patient</th>
          <th scope="col">Status</th>
          <th scope="col">Date</th>
          <th scope="col">Accpeted / Reject By</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Doctor A</td>
          <td>Pawat Yuttateeranont</td>
          <td class="text-warning">Pending</td>
          <td>31/03/2018</td>
          <td>-</td>
          <td>
            <router-link to="/detail"><button type="button" class="btn btn-outline-primary">Detail</button></router-link>
            <button type="button" class="btn btn-outline-secondary">Print</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Doctor B</td>
          <td>John Cena</td>
          <td class="text-success">Accpeted</td>
          <td>31/03/2018</td>
          <td>Pharmacist A</td>
          <td>
            <router-link to="/detail"><button type="button" class="btn btn-outline-primary">Detail</button></router-link>
            <button type="button" class="btn btn-outline-secondary">Print</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Doctor C</td>
          <td>Steve Jobs</td>
          <td class="text-danger">Reject</td>
          <td>31/03/2018</td>
          <td>Pharmacist A</td>
          <td>
            <router-link to="/detail"><button type="button" class="btn btn-outline-primary">Detail</button></router-link>
            <button type="button" class="btn btn-outline-secondary">Print</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PrescriptionPage'
  }
</script>

<style>

</style>
