type UnitOfMeasure = "L" | "G" | "KG" | "LB" | "CM" | "IN" | "FT" | "YD";

const unitOfMeasureConverter = (
	value: number,
	originalUnitOfMeasure: UnitOfMeasure,
	desiredUnitOfMeasure: UnitOfMeasure
) => {
	const conversionIndex = {
		L: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "G":
					return value / 3.8;
				case "LB":
					return value * (8 / 3.8);
				case "KG":
					return value;
				default:
					return "Cannot convert this measurement.";
			}
		},
		G: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "L":
					return value * 3.8;
				case "LB":
					return value * 8;
				case "KG":
					return value * (8 / 2.2);
				default:
					return "Cannot convert this measurement.";
			}
		},
		KG: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "L":
					return value;
				case "LB":
					return value * 2.2;
				case "G":
					return value * (2.2 / 8);
				default:
					return "Cannot convert this measurement.";
			}
		},
		LB: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "L":
					return value / 2.2;
				case "G":
					return value / 8;
				case "KG":
					return value / 2.2;
				default:
					return "Cannot convert this measurement.";
			}
		},
		CM: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "IN":
					return value / 2.54;
				case "FT":
					return value / (2.54 * 12);
				case "YD":
					return value / (2.54 * 12 * 3);
				default:
					return "Cannot convert this measurement.";
			}
		},
		IN: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "CM":
					return value * 2.54;
				case "FT":
					return value / 12;
				case "YD":
					return value / (12 * 3);
				default:
					return "Cannot convert this measurement.";
			}
		},
		FT: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "CM":
					return value * 12 * 2.54;
				case "IN":
					return value * 12;
				case "YD":
					return value / 3;
				default:
					return "Cannot convert this measurement.";
			}
		},
		YD: (arg: UnitOfMeasure) => {
			switch (arg) {
				case "CM":
					return value * 3 * 12 * 2.54;
				case "IN":
					return value * 3 * 12;
				case "FT":
					return value * 3;
				default:
					return "Cannot convert this measurement.";
			}
		},
	};

	return conversionIndex[originalUnitOfMeasure](desiredUnitOfMeasure);
};

console.info("3.8 Liters to Gallons: ", unitOfMeasureConverter(3.8, "L", "G"));

console.info(
	"1.0 Foot to Centimeters: ",
	unitOfMeasureConverter(1.0, "FT", "CM")
);
