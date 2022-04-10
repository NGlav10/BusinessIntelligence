//
//  RNChartsView.swift
//  BusinessIntelligence
//
//  Created by Nick Glaviano on 4/9/22.
//

import UIKit
import Charts

class RNChartsView: UIView {
  @objc var xValues: [String] = []
  @objc var yValues: [Double] = []
  
  var chartView = HorizontalBarChartView()
  
  func formatChart() {
    chartView.legend.enabled = false
    chartView.minOffset = 0
    chartView.extraTopOffset = 15
    chartView.animate(yAxisDuration: 1.0)
  }
  
  func formatRightAxis() {
    let rightAxis = chartView.rightAxis
    rightAxis.enabled = false
    rightAxis.axisMinimum = 0
  }
  
  func formatLeftAxis() {
    let leftAxis = chartView.leftAxis
    leftAxis.axisMinimum = 0
    
    let currencyFormatter = NumberFormatter()
    currencyFormatter.numberStyle = .currency
    currencyFormatter.minimumFractionDigits = 0
    currencyFormatter.positiveSuffix = "M"
    leftAxis.valueFormatter = DefaultAxisValueFormatter(formatter: currencyFormatter)
    leftAxis.labelFont = UIFont(name: "AppleSDGothicNeo-Light", size: 10.0)!
  }
  
  func formatXAxis() {
    let xAxis = chartView.xAxis
    let dateValues = formatDate(dates: xValues)
    xAxis.valueFormatter = IndexAxisValueFormatter(values: dateValues)
    xAxis.drawGridLinesEnabled = false
    xAxis.labelPosition = .bottom
    xAxis.labelFont = UIFont(name: "AppleSDGothicNeo-Light", size: 10.0)!
  }
  
  private func initializeChart() {
    let barChartDataEntries = yValues.reversed().enumerated().map({(index, value) -> BarChartDataEntry in
      let abbreviatedValue = value / 1000000
      return BarChartDataEntry(x: Double(index), y: abbreviatedValue)
    })
    
    let dataSet = BarChartDataSet(entries: barChartDataEntries, label: "Revenue")
    dataSet.highlightEnabled = false
    dataSet.colors = ChartColorTemplates.pastel()
    dataSet.valueFont = UIFont(name: "AppleSDGothicNeo-Medium", size: 10.0)!
    
    formatChart()
    formatRightAxis()
    formatLeftAxis()
    formatXAxis()
    
    chartView.data = BarChartData(dataSet: dataSet)
    chartView.notifyDataSetChanged()
    self.addSubview(chartView)
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()
    chartView.frame = CGRect(x: 0, y: 0, width: self.frame.width, height: self.frame.height)
    self.initializeChart()
  }
}

func formatDate(dates: [String] ) -> [String] {
  let oldDateFormatter = DateFormatter()
  oldDateFormatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
  let dateFormatter = DateFormatter()
  dateFormatter.dateFormat = "MMM yyyy"
  return dates.reversed().map({(date: String) -> String in
    let oldDate = oldDateFormatter.date(from: date)
    return dateFormatter.string(from: oldDate!).replacingOccurrences(of: " ", with: "\n")
  })
}
