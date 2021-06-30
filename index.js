const { Builder, By, Key, until, ass, WebElement } = require("selenium-webdriver");
const assert = require("assert");
let webUrl = "https://www.instagram.com/";
let userName = ["meme.bazi_", "food_ka_tadka", "i_am_brokenpoet", "i_.am_memer"];
let password = ["1212"];
let comments = [
	"nice post ",
	"amazing",
	"awesome",
	"cool",
	"beautiful",
	"nice lines",
	"keep posting",
	"best page ever",
	"rply me",
	"check dm ",
	"magnificient",
	"marvelous",
	"great",
	"lovely",
	"cute",
];
let driver;
function delay(interval) {
	return it("should delay", (done) => {
		setTimeout(() => done(), interval);
	}).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
}

const delayInMs = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
};
const waitForElementByXPath = async (path, max = 15000, index = 0) => {
	try {
		let resp = await driver.findElement(By.xpath(path));
		return resp;
	} catch (e) {
		let totalTime = index * 100;
		if (totalTime > max) {
			throw e;
		}
		await delayInMs(100);
		index++;
		return waitForElementByXPath(path, max, index);
	}
};
const waitForElementByName = async (path, max = 7000, index = 0) => {
	try {
		let resp = await driver.findElement(By.name(path));
		return resp;
	} catch (e) {
		let totalTime = index * 100;
		if (totalTime > max) {
			console.log("element not found : ", index);
			throw e;
		}
		await delayInMs(100);
		index++;
		return waitForElementByName(path, max, index);
	}
};

const waitForElementByClassName = async (path, max = 10000, index = 0) => {
	try {
		let resp = await driver.findElement(By.className(path));
		return resp;
	} catch (e) {
		let totalTime = index * 100;
		if (totalTime > max) {
			throw e;
		}
		await delayInMs(100);
		index++;
		return waitForElementByClassName(path, max, index);
	}
};
const waitForElementsByClassName = async (path, max = 10000, index = 0) => {
	try {
		let resp = await driver.findElements(By.className(path));
		return resp;
	} catch (e) {
		let totalTime = index * 100;
		if (totalTime > max) {
			throw e;
		}
		await delayInMs(100);
		index++;
		return waitForElementsByClassName(path, max, index);
	}
};
const waitForElementByID = async (path, max = 10000, index = 0) => {
	try {
		let resp = await driver.findElement(By.id(path));
		return resp;
	} catch (e) {
		let totalTime = index * 100;
		if (totalTime > max) {
			throw e;
		}
		await delayInMs(100);
		index++;
		return waitForElementByID(path, max, index);
	}
};

describe("Open my Web App", function () {
	before(async function () {
		driver = await new Builder().forBrowser("chrome").build();
	});
	it("open local url", async function () {
		// await driver.manage().window().maximize();
		await driver.get(webUrl);
	});
	delay(3000);

	for (let i = 0; i < userName.length; i++) {
		it("Enter username", async () => {
			try {
				let elem = await waitForElementByName("username");
				elem.sendKeys(userName[0]);
			} catch (e) {
				console.log("Login", e);
				throw e;
			}
		});
		// delay(3000);
		it("Enter Password", async () => {
			try {
				let elem = await waitForElementByName("password");
				elem.sendKeys(password[0]);
			} catch (e) {
				console.log("Password", e);
				throw e;
			}
		});
		// delay(3000);
		it("Click on Login", async () => {
			try {
				let elem = await waitForElementByXPath(`//div[text()='Log In']`);
				elem.click();
			} catch (e) {
				console.log("Click on Login Error", e);
				throw e;
			}
		});
		delay(3000);
		it("Click on Not Now", async () => {
			try {
				let elem = await waitForElementByClassName("sqdOP yWX7d    y3zKF     ");
				elem.click();
			} catch (e) {
				console.log("Click on Not Now", e);
				throw e;
			}
		});
		delay(3000);
		it("Click on Not Now", async () => {
			try {
				let elem = await waitForElementByClassName("aOOlW   HoLwm");
				elem.click();
			} catch (e) {
				console.log("Click on Not Now", e);
				throw e;
			}
		});
		delay(3000);

		// it("open Link to comment ", async function () {
		// 	try {
		// 		await driver.executeScript(`window.open('https://www.instagram.com/p/CQVJAi7Bij-/');`);
		// 		const originalWindow = await driver.getWindowHandle();
		// 		const windows = await driver.getAllWindowHandles();
		// 		windows.forEach(async (handle) => {
		// 			if (handle !== originalWindow) {
		// 				await driver.switchTo().window(handle);
		// 				second_User = handle;
		// 			}
		// 		});
		// 	} catch (err) {
		// 		console.log("error in open link to comment & like ", err);
		// 		throw err;
		// 	}
		// });
		// delay(4000);

		it("Search page", async () => {
			try {
				let elem = await waitForElementByXPath("//input[@placeholder='Search']");
				elem.sendKeys("aww.feelings");
			} catch (e) {
				console.log("Search page Error", e);
				throw e;
			}
		});
		delay(3000);
		it("Click on First result by Id", async () => {
			try {
				let elem = await waitForElementsByClassName("_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ");
				elem[0].click();
			} catch (e) {
				console.log("Click on First Result By Id Error", e);
				throw e;
			}
		});
		delay(3000);
		it("Click on First Post", async () => {
			try {
				let elem = await waitForElementsByClassName("v1Nh3 kIKUG  _bz0w");
				elem[0].click();
			} catch (e) {
				console.log("Click on First Post", e);
				throw e;
			}
		});
		delay(3000);
		it("Like Post ", async () => {
			try {
				let elem = await waitForElementsByClassName("wpO6b  ");
				elem[2].click();
			} catch (e) {
				console.log("Like Post error ", e);
				throw e;
			}
		});

		delay(3000);
		for (let i = 0; i < comments.length; i++) {
			it("Click on Comment Icon", async () => {
				try {
					let elem = await waitForElementsByClassName("v1Nh3 kIKUG  _bz0w");
					elem[0].click();
				} catch (e) {
					console.log("Click on Comment Icon", e);
					throw e;
				}
			});
			delay(3000);

			it("Enter Comment", async function () {
				try {
					let elem = await waitForElementsByClassName("Ypffh");
					elem[0].click();
				} catch (err) {
					console.log("Enter Comment Error");
					throw err;
				}
			});
			delay(3000);

			it("Type Comment", async function () {
				try {
					let elem = await waitForElementByXPath("//textarea[@placeholder='Add a comment…']");
					elem.sendKeys(comments[i]);
				} catch (err) {
					console.log("Enter Comment Error");
					throw err;
				}
			});

			delay(3000);
			it("Click on Submit Comment", async () => {
				try {
					let elem = await waitForElementsByClassName("sqdOP yWX7d    y3zKF     ");
					// console.log(elem.length);
					elem[0].click();
					elem[1].click();
				} catch (e) {
					console.log("Click on Submit Comment Error", e);
					throw e;
				}
			});
			delay(4000);
		}

		it("Close post  ", async () => {
			try {
				let elem = await waitForElementsByClassName("wpO6b  ");
				elem[13].click();
			} catch (e) {
				console.log("Close Post error ", e);
				throw e;
			}
		});

		it("Click on Account image to logout ", async () => {
			try {
				let elem = await waitForElementsByClassName("_6q-tv");
				elem[1].click();
			} catch (e) {
				console.log("Click on Account image to logout ", e);
				throw e;
			}
		});

		it("Click on Logout", async () => {
			try {
				let elem = await waitForElementByXPath(`//div[text()='Log Out']`);
				elem.click();
			} catch (e) {
				console.log("Click on Logout Error", e);
				throw e;
			}
		});
		delay(3000);
	}
});
