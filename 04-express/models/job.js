import jobs from '../data/jobs.json' with { type: 'json' };

export class JobModel {
    static async getAllJobs({ text, technology, type, level, limit = 5, offset = 0 }) {
        let filteredJobs = jobs;

        if (text) {
            const searchTerm = text.toLowerCase();
            filteredJobs = filteredJobs.filter(
                job => job.title.toLowerCase().includes(searchTerm)
                    || job.description.toLowerCase().includes(searchTerm)
            );
        }

        if (technology) {
            const searchTerm = technology.toLowerCase();
            filteredJobs = filteredJobs.filter(
                job => job.data.technology.includes(searchTerm)
            );
        }

        if (type) {
            const searchTerm = type.toLowerCase();
            filteredJobs = filteredJobs.filter(
                job => job.data.modality.includes(searchTerm)
            );
        }

        if (level) {
            const searchTerm = level.toLowerCase();
            filteredJobs = filteredJobs.filter(
                job => job.data.level.includes(searchTerm)
            );
        }

        const limitNumber = Number(limit);
        const offsetNumber = Number(offset);

        const paginatedJobs = filteredJobs.slice(offsetNumber, offsetNumber + limitNumber);

        return {
            jobs: paginatedJobs,
            total: filteredJobs.length
        };
    }

    static async getJobById(id) {
        return jobs.find(job => job.id === id);
    }

    static async createJob({ title, company, location, description, data }) {
        const newJob = {
            id: randomUUID(),
            title,
            company,
            location,
            description,
            data
        };

        jobs.push(newJob);

        return newJob;
    }

    static async updateJob(id, { title, company, location, description, data }) {
        const jobIndex = jobs.findIndex(job => job.id === id);

        if (jobIndex === -1) {
            return null;
        }

        jobs[jobIndex] = {
            ...jobs[jobIndex],
            title,
            company,
            location,
            description,
            data
        };

        return jobs[jobIndex];
    }

    static async deleteJob(id) {
        const jobIndex = jobs.findIndex(job => job.id === id);

        if (jobIndex === -1) {
            return false;
        }

        jobs.splice(jobIndex, 1);
        return true;
    }
}