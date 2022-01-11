var isEqual = true;
var str = 'string';
var nmbr = 5;
var arr = [1, 2, 3];
var arr3 = [1, 2, 3];
var OrderPhase;
(function (OrderPhase) {
    OrderPhase["DRAFT"] = "DRAFT";
    OrderPhase["ACCEPTED"] = "ACCEPTED";
    OrderPhase["FINISHED"] = "FINISHED";
})(OrderPhase || (OrderPhase = {}));
var STATUS = OrderPhase.DRAFT;
