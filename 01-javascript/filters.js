const filterLocation = document.querySelector('#filter-location')
const filterTechnology = document.querySelector('#filter-technology')
const filterExperienceLevel = document.querySelector('#filter-experience-level')

filterLocation.addEventListener('change', filterJobs)

filterTechnology.addEventListener('change', filterJobs)

filterExperienceLevel.addEventListener('change', filterJobs)

function filterJobs(){
  const locationValue = filterLocation.value
  const technologyValue = filterTechnology.value
  const experienceLevelValue = filterExperienceLevel.value

  const jobs = document.querySelectorAll('.job-listing-card')

  jobs.forEach(job => {
    const modality = job.getAttribute('data-modality')
    const technology = job.getAttribute('data-technology')
    const level = job.getAttribute('data-level')

    const isLocationMatch = locationValue === '' || locationValue === modality
    const isTechnologyMatch = technologyValue === '' || technology.includes(technologyValue)
    const isExperienceLevelMatch = experienceLevelValue === '' || experienceLevelValue === level

    const isShown = isLocationMatch && isTechnologyMatch && isExperienceLevelMatch
    job.classList.toggle('is-hidden', isShown === false)
  })
}