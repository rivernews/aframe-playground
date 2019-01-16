function putAnchorsAlongAxis(_axisName="", color="black") {
    const axisName = _axisName.toLowerCase();
    const anchorAmount = 5;
    const anchorRadius = .1;
    const anchorStep = 1;

    // generate anchors
    for (let i = 0; i < anchorAmount; i++) {
        let anchor = $("<a-sphere>", {
            class: "coord-anchor",
            position: getCoordAnchorPosition(axisName, i * anchorStep),
            radius: anchorRadius,
            color: color
        });
        $("a-scene").append(anchor);
    }

    
}

function getCoordAnchorPosition(_axisName, value) {
    let axisName = _axisName.toLowerCase();
    if (axisName == 'x') {
        return `${value} 0 0`;
    }
    else if (axisName == 'y') {
        return `0 ${value} 0`;
    }
    else if (axisName == 'z') {
        return `0 0${value}`;
    }
}