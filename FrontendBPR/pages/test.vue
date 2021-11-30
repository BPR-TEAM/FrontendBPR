<template>
  <div>
    <button class="button" @click="addExperience">Add experience</button>
    <div class="Chart">
      <DoughnutExample
        ref="skills_chart"
        :chart-data="chartData"
        :options="options"
      >
      </DoughnutExample>
      <div v-for="(val, i) in currentDataSet" :key="i">
        <input
          type="range"
          min="0"
          max="8"
          placeholder="name"
          :value="currentDataSet[i]"
          @input="updateAmount($event.target.value, i)"
        />
        <span> {{ currentDataSet[i] }} years </span>
        <input
          type="text"
          :value="chartData.labels[i]"
          @input="updateName($event.target.value, i)"
        />
        <button @click="remove(i)">remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutExample from "../components/Charts/DoughnutChart.vue";
import Vue from "vue";
import LoginModal from "../components/Modals/Login.vue";
import RegistrationModal from "../components/Modals/Register.vue";
import Note from "../components/Modals/Note.vue";
import NewPlant from "../components/Modals/NewPlant.vue";
import Tag from "../components/Tag.vue";
import ProfilePlant from "../components/ProfilePlant.vue";
import AdviceContainer from "../components/page-containers/AdviceContainer.vue";
import NotesContainer from "../components/page-containers/NotesContainer.vue";
import MyPlants from "../components/page-containers/MyPlants.vue";
import randomColor from "randomcolor";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateRotate: false
  }
};
export default {
  data() {
    return {
      options,
      chartData: {
        labels: ["skill1"],
        datasets: [
          {
            backgroundColor: [randomColor()],
            data: [1]
          }
        ]
      }
    };
  },
  components: {
    LoginModal,
    RegistrationModal,
    Note,
    NewPlant,
    Tag,
    ProfilePlant,
    AdviceContainer,
    NotesContainer,
    MyPlants,
    DoughnutExample
  },

  computed: {
    currentDataSet() {
      return this.chartData.datasets[0].data;
    }
  },
  methods: {
    openLogin(modal) {
      this.$refs[modal].open();
    },
    updateChart() {
      this.$refs.skills_chart.update();
      console.log(this.chartData.datasets[0].data);
    },
    updateAmount(amount, index) {
      this.chartData.datasets[0].data.splice(index, 1, amount);
      this.updateChart();
    },
    updateName(text, index) {
      this.chartData.labels.splice(index, 1, text);
      this.updateChart();
    },
    addExperience() {
      const currentDataset = this.chartData.datasets[0];
      this.chartData.labels.push(`Skill ${currentDataset.data.length + 1}`);
      currentDataset.data.push(0);
      currentDataset.backgroundColor.push(randomColor());
      this.updateChart();
    },
    remove(index) {
      const currentDataset = this.chartData.datasets[0];
      currentDataset.data.splice(index, 1);
      this.chartData.labels.splice(index, 1);
      currentDataset.backgroundColor.splice(index, 1);
      this.updateChart();
    }
  }
};
</script>

<style lang="scss">
button {
  border: 1px solid black;

  &:active {
    background-color: red;
  }
}

.tag {
  border: 1px solid black;
}

.lets-see {
  display: flex;
  // flex-direction: column;
}

.small {
  width: 100%;
  height: 1000px;
}
</style>
