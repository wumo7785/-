import About from './components/About.vue'
import SinglePage from './components/SinglePage.vue'
import MyRecipes from './components/MyRecipes.vue'

export default[
    {path:"/",component:MyRecipes},
    {path:"/SinglePage/:id",component:SinglePage},
    {path:"/About",component:About}
]