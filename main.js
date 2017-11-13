$(function () {
    const vm = new Vue({
        el: '#app',
        data: {
            loading: false,
            showing: 'planets',
            planets: [],
            planet: null,
        },
        methods: {
            loadPlanets() {
                this.loading = true

                this.$http.get('https://swapi.co/api/planets/')
                    .then(resp => {
                        this.planets = resp.body
                        this.loading = false
                    })
            }
        },
        selectPlanets(planet) {
            this.planet = planet
            this.showing = 'planets'
            this.loadPlanets()
        }
    })
})