function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
}

function createHashMap() {
    const buckets = []
    const capacity = 16;
    const loadFactor = 0.75

    function set(key, value) {
        let index = hash(key) % capacity;
        if (!buckets[index]) {
            buckets[index] = [];
            return null;
        }
        for (let pair of buckets[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        buckets[index].push([key, value]);
    }
    function get(key) {
        let index = hash(key) % capacity;
        if (!buckets[index]) {
            return null;
        }
        else
            for (let pair of buckets[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        return null;
    }
    function has(key) {
        let index = hash(key) % capacity;
        if (!buckets[index]) {
            return -1;
        }
        else
            for (let pair of buckets[index]) {
                if (pair[0] === key) {
                    return "yes";
                }
            }
        return -1;
    }
    function remove(key) {
        let index = hash(key) % capacity;
        if (!buckets[index]) {
            return -1;
        }
        else
            for (let pair of buckets[index]) {
                if (pair[0] === key) {
                    return "yes";
                }
            }
        return -1;
    }
    return {
        set,
        get,
        has,
        remove,
    }
}