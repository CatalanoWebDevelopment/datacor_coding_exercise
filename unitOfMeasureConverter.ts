type UnitOfMeasure = "L" | "G" | "KG" | "LB" | "CM" | "IN" | "FT" | "YD";

const unitOfMeasureConverter = (
	quantity: number,
	originalUnitOfMeasure: UnitOfMeasure,
	desiredUnitOfMeasure: UnitOfMeasure
) => {
	const conversionIndex = {
		L: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "G":
					return quantity / 3.8;
				case "LB":
					return quantity * (8 / 3.8);
				case "KG":
					return quantity;
				default:
					return "Cannot convert this measurement.";
			}
		},
		G: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "L":
					return quantity * 3.8;
				case "LB":
					return quantity * 8;
				case "KG":
					return quantity * (8 / 2.2);
				default:
					return "Cannot convert this measurement.";
			}
		},
		KG: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "L":
					return quantity;
				case "LB":
					return quantity * 2.2;
				case "G":
					return quantity * (2.2 / 8);
				default:
					return "Cannot convert this measurement.";
			}
		},
		LB: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "L":
					return quantity / 2.2;
				case "G":
					return quantity / 8;
				case "KG":
					return quantity / 2.2;
				default:
					return "Cannot convert this measurement.";
			}
		},
		CM: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "IN":
					return quantity / 2.54;
				case "FT":
					return quantity / (2.54 * 12);
				case "YD":
					return quantity / (2.54 * 12 * 3);
				default:
					return "Cannot convert this measurement.";
			}
		},
		IN: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "CM":
					return quantity * 2.54;
				case "FT":
					return quantity / 12;
				case "YD":
					return quantity / (12 * 3);
				default:
					return "Cannot convert this measurement.";
			}
		},
		FT: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "CM":
					return quantity * 12 * 2.54;
				case "IN":
					return quantity * 12;
				case "YD":
					return quantity / 3;
				default:
					return "Cannot convert this measurement.";
			}
		},
		YD: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "CM":
					return quantity * 3 * 12 * 2.54;
				case "IN":
					return quantity * 3 * 12;
				case "FT":
					return quantity * 3;
				default:
					return "Cannot convert this measurement.";
			}
		},
	};

	return conversionIndex[originalUnitOfMeasure](desiredUnitOfMeasure);
};

const qty: number = 3.8;
const orig: UnitOfMeasure = "L";
const desired: UnitOfMeasure = "G";

console.info(
	`${qty}${orig} to ${desired}: `,
	unitOfMeasureConverter(qty, orig, desired)
);
