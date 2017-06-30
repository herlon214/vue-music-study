<template>
  <div>
    <div class="columns">
      <div class="column has-text-centered">
        <div class="block" v-if="plays > 0">
          <span class="tag is-success">
            Right: {{ right_answers_count }}
          </span>
          <span class="tag is-danger">
            Wrong: {{ wrong_answers_count }}
          </span>
        </div>
        <div v-if="plays > 0">
          <small>Time average of each answer: <strong>{{ time_avg.toFixed(2) }}</strong>s</small> <br>
        </div>

        <div v-if="waiting">
          <a class="button is-warning is-medium" v-on:click="start">start game</a>
        </div>
        <div v-if="timing">
          {{ time }}
        </div>

        <div v-if="playing">
          <h2 class="title is-2">{{ scale_chosen }}</h2>
          <p>What's the <strong>{{ note_chosen }}{{ note_chosen === 5 ? 'th' : 'rd'}}</strong> note in the <strong>{{ scale_chosen }}</strong> scale?</p>

          <br>
          <div class="column">
            <input class="input is-medium" type="text" placeholder="Type your answer here" v-model="user_answer"> <br>

            <br>
            <div class="has-text-centered">
              <a class="button is-success is-medium" v-on:click="check_answer">confirm</a>
            </div>
          </div>

        </div>

        <div v-if="result">
          <br><br>
          <div class="notification is-warning" v-if="!result_answer">
            <button class="delete"></button>
            Whoops! Wrong note, the right one is <strong>{{ notes[scale_chosen][note_chosen].toUpperCase() }}</strong>
          </div>

          <div class="notification is-success" v-if="result_answer">
            <button class="delete"></button>
            Yes!! <u>{{ notes[scale_chosen][note_chosen].toUpperCase() }}</u> really is the right note, let's try another one...
          </div>
        </div>

        <br><br>
        <a class="button is-info" v-on:click="stop" v-if="!true">stop</a>

      </div>
    </div>
  </div>
</template>

<script>
const notes = require('../lib/notes')
const getQuestion = () => {
  let scale = ['C', 'Cm', 'D', 'Dm', 'E', 'Em', 'F', 'Fm', 'G', 'Gm', 'A', 'Am', 'B', 'Bm']
  let scaleChosen = scale[Math.floor(Math.random() * 7)]
  let noteChosen = Math.floor(Math.random() * 2) === 1 ? 3 : 5

  return {
    scale_chosen: scaleChosen,
    note_chosen: noteChosen
  }
}

export default {
  name: 'third-and-fifth',
  props: ['test'],
  data () {
    return {
      waiting: true,
      timing: false,
      playing: false,
      result: false,
      result_answer: false,
      right_answers_count: 0,
      wrong_answers_count: 0,
      time_avg: 0,
      plays: 0,
      time: 0,
      answer_time: 0,
      scale_chosen: '',
      note_chosen: 0,
      user_answer: '',
      avgInterval: {},
      notes: notes
    }
  },
  methods: {
    start () {
      this.result = false
      this.user_answer = ''
      this.time = 3
      this.waiting = false
      this.timing = true

      let interval = setInterval(() => {
        if (this.time > 1) {
          this.time = this.time - 1
        } else {
          clearInterval(interval)
          let question = getQuestion()
          this.timing = false
          this.scale_chosen = question.scale_chosen
          this.note_chosen = question.note_chosen
          this.playing = true
          this.avgInterval = setInterval(() => {
            this.answer_time = this.answer_time + 1
          }, 1000)
        }
      }, 1000)
    },
    check_answer () {
      clearInterval(this.avgInterval)

      if (this.user_answer.toLowerCase() === this.notes[this.scale_chosen][this.note_chosen]) {
        this.result_answer = true
        this.right_answers_count++
      } else {
        this.result_answer = false
        this.wrong_answers_count++
      }

      this.plays++
      this.result = true
      this.playing = false
      this.time_avg = (this.time_avg + this.answer_time) / this.plays

      setTimeout(() => {
        this.start()
      }, 3000)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
