
  it("should calculate the monthly payment correctly", function() {
    const testValues = { amount: 10000, years: 5, rate: 6 };
        const calculatedMonthlyPayment = calculateMonthlyPayment(testValues);
    expect(calculatedMonthlyPayment).toBe("193.33"); 
  });

  it("should calculate the monthly payment as a decimal with two decimal places", function() {
    const testValues = { amount: 10000, years: 5, rate: 6 };
    const calculatedMonthlyPayment = calculateMonthlyPayment(testValues);
    expect(calculatedMonthlyPayment).toMatch(/^\d+\.\d{2}$/); 
  });

 
