
const baseUrl = "https://athleterest20211028103634andershald.azurewebsites.net/api/Athletes"



Vue.createApp({
    data() {
        return {
            athletes: [],
            error: null,
            athleteId: "",
            singleAthlete: null,
            idToGetBy: null,
            deleteId: 0,
            deleteMessage: "",
            addData: { name: "", country: "", height: ""},
            addMessage: "",
            updateData: { id: 0, name: "", country: "", height: ""},
            updateMessage: ""
    
    
        }
    },
    
    async created() {
        console.log("created method called")
        this.helperGetPosts(baseUrl)
    },
    
    methods: {
    
        getAllAthletes() {
            this.helperGetAndShow(baseUrl)
        },
    
        async helperGetAndShow(url) { 
            try {
                const response = await axios.get(url)
                this.athletes = await response.data
            } catch (ex) {
                alert(ex.message) 
            }
        },
    
 
    
        async deleteAthlete(deleteId) {
            const url = baseUrl + "/" + deleteId
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getAllAthletes()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async addAthlete() {
            try {
                response = await axios.post(baseUrl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllAthletes()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async updateAthlete() {
            const url = baseUrl + "/" + this.updateData.Id
            try {
                response = await axios.put(url, this.updateData)
                this.updateMessage = "response " + response.status + " " + response.statusText
                this.getAllAthletes()
            } catch (ex) {
                alert(ex.message)
            }
            },
    
        async helperGetAthletes(url) {
            try {
                const response = await axios.get(url)
                this.athletes = await response.data
                this.error = null
            } catch (ex) {
                this.athletes = []
                this.error = ex.message
            }
            },
    
            async cleanList() {
                this.athletes = []
                this.error = null
            }
        
    }
    
    }).mount("#app")
    