import { Router } from 'express'
import * as apiCtrl from '../controllers/api.js'

const router = Router()

router.post('/ingredients', apiCtrl.createIngredient)
router.get('/ingredients', apiCtrl.ingredientIndex)
router.delete('/ingredients/:id', apiCtrl.deleteIngredient)


export {
  router
}