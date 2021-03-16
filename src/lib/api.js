export default {
    async getEvents() {
      const response = await fetch('https://strapi-proto-dashboard.uc.r.appspot.com/events')
      const jsonBody = await response.json()
    
        const events = jsonBody
  
      if (!response.ok) throw new Error('Ocurrió un error al obtener los eventos')
  
      return events
    },

    async getNews() {
      const response = await fetch('https://strapi-proto-dashboard.uc.r.appspot.com/news')
      const jsonBody = await response.json()
    
        const news = jsonBody
  
      if (!response.ok) throw new Error('Ocurrió un error al obtener las noticias')
  
      return news
    },

    async getBamboo(){
      const response = await fetch('http://localhost:3000/bamboo/rest/api/latest/plan.json')

       return response;
    }
  }
  