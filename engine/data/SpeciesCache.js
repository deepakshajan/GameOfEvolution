class SpeciesCache {

    static data = new Map();
    
    static addCount(speciesId) {
        let currentCount = SpeciesCache.getCount(speciesId);
        SpeciesCache.data.set(speciesId, ++currentCount);
    }

    static contains(speciesId) {
        return SpeciesCache.data.has(speciesId);
    }

    static getCount(speciesId) {
        return SpeciesCache.contains(speciesId) ? SpeciesCache.data.get(speciesId) : 0;
    }

    static removeCount(speciesId) {
        let currentCount = SpeciesCache.getCount(speciesId);
        if(currentCount > 1) {
            SpeciesCache.data.set(speciesId, --currentCount);
        } else {
            SpeciesCache.data.delete(speciesId);
        }
    }

    static getTotalSpeciesCount() {
        let speciesCount = 0;
        SpeciesCache.data.forEach((v,k)=>{speciesCount+=v>0?1:0});
        return speciesCount;
    }

    static resetData() {
        SpeciesCache.data = new Map();
    }
}

module.exports = SpeciesCache;