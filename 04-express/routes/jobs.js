import { Router } from 'express';
import { JobsController } from '../controllers/jobs.js';

const jobsRouter = Router();

jobsRouter.get('/', JobsController.getAllJobs);

jobsRouter.get('/:id', JobsController.getJobById);

jobsRouter.post('/', JobsController.createJob);

jobsRouter.put('/:id', JobsController.updateJob);

jobsRouter.delete('/:id', JobsController.deleteJob);

export { jobsRouter };