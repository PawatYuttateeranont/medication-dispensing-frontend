<template>
  <div id="prescription-add-page" class="container">

    <h3 class="text-left">Create Prescription</h3>

    <div class="row row pt-2 pb-2">
      <div class="col-12 text-left">
        <!--<div class="input-group mb-3">-->
          <!--<div class="input-group-prepend">-->
            <!--<span class="input-group-text">ID</span>-->
          <!--</div>-->
          <!--<input type="text" class="form-control" placeholder="Patient ID" aria-label="id" v-model="patient.id">-->
        <!--</div>-->
        <label>Patient ID:</label>
        <model-select :options="patients"
                      v-model="selectedPatient"
                      placeholder="Select Patient">
        </model-select>

      </div>
    </div>

    <div class="row pt-2 pb-2">
      <div class="col-6 text-left">
        Name: {{selectedPatient.name}}
      </div>
      <div class="col-6 text-left">
        Surname: {{selectedPatient.surname}}
      </div>
    </div>

    <div class="row pt-2 pb-2">
      <div class="col-6 text-left">
        Age: {{selectedPatient.age}}
      </div>
      <div class="col-6 text-left">
        Sex: {{selectedPatient.sex}}
      </div>
    </div>

    <div class="row pt-2 pb-2">
      <div class="col-6 text-left">
        Allergy history: {{selectedPatient.allergy}}
      </div>
    </div>

    <div class="text-center mt-3 mb-3">
      <table class="table center-align">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Drug Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Unit</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <!-- List Drugs -->
        <tr v-for="(drug, index) in selectedDrugs">
          <th scope="row">{{index + 1}}</th>
          <td>{{drug.name}}</td>
          <td>{{drug.amount}}</td>
          <td>{{drug.unit}}</td>
          <td>
            <button type="button" class="btn btn-outline-warning">Edit</button>
            <button type="button" class="btn btn-outline-danger" @click="deleteDrug(index)">Delete</button>
          </td>
        </tr>
        <!-- Add Drug -->
        <tr>
          <th scope="row"></th>
          <td>
            <model-select :options="drugs"
                          v-model="selectedDrug"
                          placeholder="Select Medicine">
            </model-select>
          </td>
          <td><input type="number" class="form-control height" placeholder="amount" v-model="drugAmount" min="1" max="99"/></td>
          <td><span class="height line-height align-middle">{{selectedDrug.unit}}</span></td>
          <td><button type="button" class="btn btn-block btn-outline-primary height" @click="addDrug" :disabled="disabledAddDrug">Add</button></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="row">
      <div class="col-12">
        <label class="w-100 text-left">Note:</label>
        <textarea rows="8" class="form-control"></textarea>
      </div>
    </div>

    <div class="row mt-3 mb-3">
      <div class="col-12 text-right">
        <button type="button" class="btn btn-danger">Cancel</button>
        <button type="button" class="btn btn-success" @click="createPrescription" :disabled="disabledCreatePrescription">Submit</button>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import { ModelSelect } from 'vue-search-select';

  export default {
    name: 'PrescriptionAddPage',
    components: {
      ModelSelect
    },
    data() {
      return {
        patient :{
          id: 'EX001',
          name: 'Allison',
          surname: 'Chaplin',
          age: 25,
          sex: 'Female',
          allergy: '-'
        },
        doctor: [],
        patients: [
          { value: '1', text: '00001', name: 'Allison', surname: 'Chaplin', age: 20, sex: 'female', allergy: 'None' },
          { value: '2', text: '00002', name: 'Hills',   surname: 'Jocelyn', age: 21, sex: 'male',   allergy: 'None' },
          { value: '3', text: '00003', name: 'Kuphal',  surname: 'Shakira', age: 22, sex: 'male',   allergy: 'None' },
          { value: '4', text: '00004', name: 'Hagenes', surname: 'Glenda',  age: 23, sex: 'female', allergy: 'None' },
          { value: '5', text: '00005', name: 'Batz',    surname: 'Savion',  age: 24, sex: 'male',   allergy: 'None' }
        ],
        selectedPatient: {
          value: '',
          text: '',
          name: '',
          surname: '',
          age: '',
          sex: '',
          allergy: ''
        },
        drugs: [
          { value: '1', text: 'Aspirin', name: 'Aspirin', unit: 'Dose(s)' },
          { value: '2', text: 'Mendilex', name: 'Mendilex', unit: 'Pill(s)' },
        ],
        selectedDrug: {
          value: '',
          text: '',
          name: '',
          unit: '',
        },
        drugAmount: 0,
        selectedDrugs: [],
      }
    },
    methods: {
      addDrug: function () {
        var drug = {
          name: this.selectedDrug.name,
          unit: this.selectedDrug.unit,
          amount: this.drugAmount,
        }
        this.selectedDrugs.push(drug)
      },
      deleteDrug: function (index) {
        this.selectedDrugs.splice(index ,1)
      },
      createPrescription: function () {
        console.log('creating . . .')
      }
    },
    computed: {
      disabledAddDrug: function () {
        if (this.drugAmount > 0 && this.selectedDrug.name != ""  ) {
          return false
        } else {
          return true
        }
      },
      disabledCreatePrescription: function () {
        if (this.selectedPatient.name != "" && this.selectedDrugs != []) {
          return false
        } else {
          return true
        }
      }
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/users')
        this.doctor = response.data.response
      } catch (error) {
        console.log(error)
      }

    }
  }
</script>

<style>
  .height {
    height: 43.42px;
  }

  .line-height {
    line-height: 43.42px;
  }

</style>
