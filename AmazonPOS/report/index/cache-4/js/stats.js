var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "29124",
        "ok": "29124",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14753",
        "ok": "14753",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13316",
        "ok": "13316",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14980",
        "ok": "14980",
        "ko": "-"
    },
    "percentiles2": {
        "total": "28024",
        "ok": "28024",
        "ko": "-"
    },
    "percentiles3": {
        "total": "28955",
        "ok": "28955",
        "ko": "-"
    },
    "percentiles4": {
        "total": "29114",
        "ok": "29114",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 89,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "217",
        "ok": "217",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "29124",
        "ok": "29124",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14753",
        "ok": "14753",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "13316",
        "ok": "13316",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14980",
        "ok": "14980",
        "ko": "-"
    },
    "percentiles2": {
        "total": "28024",
        "ok": "28024",
        "ko": "-"
    },
    "percentiles3": {
        "total": "28955",
        "ok": "28955",
        "ko": "-"
    },
    "percentiles4": {
        "total": "29114",
        "ok": "29114",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 89,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
