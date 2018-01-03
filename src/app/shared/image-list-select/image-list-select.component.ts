import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-image-list-select',
    templateUrl: './image-list-select.component.html',
    styleUrls: ['./image-list-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ImageListSelectComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => ImageListSelectComponent),
            multi: true,
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageListSelectComponent implements ControlValueAccessor {
    selected: string;
    @Input() title = '选择封面：';
    @Input() items: string[] = [];
    @Input() cols = 8;
    @Input() rowHeight = "64px";
    @Input() itemWidth = '80px';
    @Input() useSvgIcon = false;
    @Output('itemChange') itemChange = new EventEmitter<string>();
    private propagateChange = (_: any) => { };
    public writeValue(obj: any) {
        if (obj && obj !== '') {
            this.selected = obj;
        }
    }

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public validate(c: FormControl) {
        return this.selected ? null : {
            imageListSelect: {
                valid: false,
            },
        };
    }

    public registerOnTouched() {
    }

    onChange(i) {
        this.selected = this.items[i];
        this.propagateChange(this.items[i]);
        this.itemChange.emit(this.items[i]);
    }

}
