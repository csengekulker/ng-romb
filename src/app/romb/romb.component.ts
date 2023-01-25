import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-romb',
  templateUrl: './romb.component.html',
  styleUrls: ['./romb.component.scss']
})
export class RombComponent implements OnInit {

  aside = new FormControl('')
  alpha = new FormControl('')

  perimeter = new FormControl('')
  area = new FormControl('')

  resultVisible = false
  resetVisible = false

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: any) {
    if (event.key == "Enter") {
      this.eventHandler()
    } 
  }

  eventHandler() {
    let aside = Number(this.aside.value)
    let alpha = Number(this.alpha.value)

    let perimeter = this.calcPerimeter(aside)
    let area = this.calcArea(aside, alpha)

    this.resultVisible = true
    this.resetVisible = true

    this.perimeter.setValue(String(perimeter + " cm"))
    this.area.setValue(String(area + " cm²"))

  }

  calcPerimeter(aside: number) {
    return aside * 4
  }

  calcArea(aside: number, alpha: number) {
    let rad = alpha * Math.PI / 180
    let area = Math.pow(aside, 2) * Math.sin(rad)

    return area
  }

  reset() {
    this.aside.setValue('')
    this.alpha.setValue('')

    this.resultVisible = false
    this.resetVisible = false
  }

}
