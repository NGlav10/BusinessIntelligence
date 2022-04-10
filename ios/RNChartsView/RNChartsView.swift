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
  
  private func styleDataSet(dataSet: BarChartDataSet) {
    dataSet.highlightEnabled = false
    dataSet.colors = ChartColorTemplates.pastel()
  }
  
  private func styleChart() {
    chartView.rightAxis.enabled = false
    chartView.legend.enabled = false
    
    let currencyFormatter = NumberFormatter()
    currencyFormatter.numberStyle = .currency
    currencyFormatter.minimumFractionDigits = 0
    currencyFormatter.positiveSuffix = "M"
    currencyFormatter.negativeSuffix = "M"
    chartView.leftAxis.valueFormatter = DefaultAxisValueFormatter(formatter: currencyFormatter)
    chartView.leftAxis.labelAlignment = .natural
    chartView.leftAxis.axisMinimum = 0
    
    let dateFormatter = DateFormatter()
    dateFormatter.dateStyle = .short
    dateFormatter.timeStyle = .none
    chartView.xAxis.valueFormatter = IndexAxisValueFormatter(values: xValues)
    chartView.xAxis.drawGridLinesEnabled = false
    chartView.xAxis.labelPosition = .bottom
    
    chartView.animate(xAxisDuration: 0, yAxisDuration: 1.5)
  }
  
  private func initializeChart() {
    var barChartDataEntries: [BarChartDataEntry] = []
    for (index, value) in yValues.reversed().enumerated() {
      let abbreviatedValue = value / 1000000
      let dataEntry = BarChartDataEntry(x: Double(index), y: abbreviatedValue)
      barChartDataEntries.append(dataEntry)
    }
    
    let dataSet = BarChartDataSet(entries: barChartDataEntries, label: "Revenue")
    self.styleDataSet(dataSet: dataSet)
    chartView.data = BarChartData(dataSet: dataSet)
    
    self.styleChart()
    
    self.addSubview(chartView)
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()
    chartView.frame = CGRect(x: 0, y: 0, width: self.frame.width, height: self.frame.height)
    self.initializeChart()
  }
}
