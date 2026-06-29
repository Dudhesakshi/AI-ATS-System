export const analyzeResume = (candidate, job) => {

    let recommendations = [];

    const matchedSkills =
        candidate.skills.filter(
            skill => job.skills.includes(skill)
        );

    const matchPercentage =
        Math.round(
            (matchedSkills.length /
                job.skills.length) * 100
        );


    if (!candidate.skills.includes("Docker")) {

        recommendations.push(
            "Docker skill missing"
        );

    }

    if (!candidate.skills.includes("AWS")) {

        recommendations.push(
            "AWS skill missing"
        );

    }

    return {

        score: candidate.score,
        recommendations,
        matchedSkills,
        matchPercentage

    };

};