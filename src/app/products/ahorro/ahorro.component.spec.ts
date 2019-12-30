import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AhorroComponent } from './ahorro.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
describe('AhorroComponent', () => {
  let component: AhorroComponent;
  let fixture: ComponentFixture<AhorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorroComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
