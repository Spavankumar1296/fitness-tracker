export const formatDate = (date) => {
    const options = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        allowedHosts: ["localhost:3000"]
    }
    return (new Date(date)).toLocaleDateString("en-US", options);
} 