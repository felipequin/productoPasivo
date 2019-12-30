import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCuentaComponent } from './crear-cuenta.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('CrearCuentaComponent', () => {
  let component: CrearCuentaComponent;
  let fixture: ComponentFixture<CrearCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCuentaComponent ],
      imports:[FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
