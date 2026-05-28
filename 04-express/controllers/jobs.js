import { DEFAULTS } from '../config.js';
import { JobModel } from '../models/job.js';

export class JobsController {
    static async getAllJobs(request, response){
        const { LIMIT_PAGINATION, LIMIT_OFFSET } = DEFAULTS;
        const { text, technology, type, level, limit = LIMIT_PAGINATION, offset = LIMIT_OFFSET } = request.query;

        const paginatedJobs = await JobModel.getAllJobs({ text, technology, type, level, limit, offset });

        response.json({
            jobs: paginatedJobs.jobs,
            total: paginatedJobs.total
        });
    }

    static async getJobById(request, response){
        const { id } = request.params;

        const job = await JobModel.getJobById(id);

        if (!job) {
            return response.status(404).json({ error: 'Job not found' });
        }

        return response.json(job);
    }

    static async createJob(request, response){
        const { title, company, location, description, data } = request.body;

        const newJob = await JobModel.createJob({ title, company, location, description, data });

        return response.status(201).json(newJob);
    }

    static async updateJob(request, response){
        const { id } = request.params;
        const { title, company, location, description, data } = request.body;
        
        const updatedJob = await JobModel.updateJob(id, { title, company, location, description, data });

        if (!updatedJob) {
            return response.status(404).json({ error: 'Job not found' });
        }

        return response.json(updatedJob);
    }

    static async deleteJob(request, response){
        const { id } = request.params;

        const deletedJob = await JobModel.deleteJob(id);

        if (!deletedJob) {
            return response.status(404).json({ error: 'Job not found' });
        }

        return response.json({ message: 'Job deleted' });
    }
}